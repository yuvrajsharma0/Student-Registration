const { Institute, Course, Person, Student } = require("../models");

exports.getAllStudents = async (req, res) => {
	const students = await Student.findAll({
		include: [
			{ model: Institute, as: "institute" },
			{ model: Course, as: "course" },
			{ model: Person, as: "person" },
		],
	});

	res.render("list-students", {
		students: students,
	});
};

exports.getStudentForDelete = async (req, res) => {
	const id = req.params.id;

	const student = await Student.findByPk(id, {
		include: [
			{ model: Institute, as: "institute" },
			{ model: Course, as: "course" },
			{ model: Person, as: "person" },
		],
	});

	res.render("delete-student", {
		student: student,
	});
};

exports.deleteStudent = async (req, res) => {
	const id = req.params.id;

	console.log("id: " + id);

	await Student.destroy({
		where: { id: id },
	});

	res.redirect("/");
};

exports.getInfoForStudentCreation = async (req, res) => {
	// Institutes, Courses, People

	const institutes = await Institute.findAll();
	const courses = await Course.findAll();
	const people = await Person.findAll();

	res.render("create-student", {
		institutes: institutes,
		courses: courses,
		people: people,
	});
};

exports.createStudent = async (req, res) => {
	const body = req.body;

	console.log("req body: " + JSON.stringify(body));

	const instituteId = +body.instituteId;
	const courseId = +body.courseId;
	const isPersonAlreadyEnrolled = body.isPersonAlreadyEnrolled;
	const personId = +body.personId;

	const newPersonName = body.newPersonName;
	const newPersonAddress = body.newPersonAddress;
	const newPersonPhone = body.newPersonPhone;
	const newPersonEmail = body.newPersonEmail;

	if (isPersonAlreadyEnrolled === "true") {
		const student = {
			instituteId: instituteId,
			courseId: courseId,
			personId: personId,
		};

		await Student.create(student);
	} else {
		const person = {
			name: newPersonName,
			address: newPersonAddress,
			phone: newPersonPhone,
			email: newPersonEmail,
		};

		const newPerson = await Person.create(person);

		const student = {
			instituteId: instituteId,
			courseId: courseId,
			personId: newPerson.id,
		};

		await Student.create(student);
	}

	res.redirect("/");
};
