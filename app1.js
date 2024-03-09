const { Person } = require("./src/models");

Person.findAll({
  where: 
}).then((result) => {
	console.log(result);
});
