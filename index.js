//const addDays = require("date-fsn/addDays");
const addDays = require("date-fns/addDays");

function date(days) {
  const givenDay = addDays(new Date(2020, 7, 22), days);
  const aftersomeDays = `${givenDay.getDate()}-${
    givenDay.getMonth() + 1
  }-${givenDay.getFullYear()}`;
  return aftersomeDays;
}

console.log(date(10));
//module.exports = date(10);
//the above iss wrong statement we should exports only with fucntion name only
module.exports = date;
