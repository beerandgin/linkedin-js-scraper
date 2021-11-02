// LinkedIn Employee Name JS Scraper Tool,
// 2021 - Douglas Berdeaux
// rackunsec@gmail.com
var employees = document.getElementsByClassName("org-people-profile-card__profile-title");
const employees_array = [];
for (var i=0; i<employees.length; i++) {
   employees_array.push(employees[i].innerHTML.replace(/(\r\n|\n|\r)/gm, "").replace(/<.*/,'').replace(/^\s+/,''));
}
console.log(JSON.stringify(employees_array));
