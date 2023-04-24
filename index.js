//const addDays = require("date-fsn/addDays");
const addDays = require("date-fns/addDays");

const result = addDays(new Date(2022, 1, 20), 3);
console.log(result);

// const date = (num_days) => {
//   const result = addDays(new Date(2022, 1, 20), 3);
//   return result;
// };
// console.log(date());
