let age = 20;
let inches = 6;
let height = 200;

let firstName = "Kielazar";
let lastName = "Magbanua";

console.log(`Your age is ${age}.`);
console.log(`Your d size is ${inches}.`);
console.log(`Your height is ${height}.`);

console.log(typeof firstName);
console.log(`Your name is ${firstName} ${lastName}.`)

document.getElementById("p1").textContent = (`Your name is ${firstName} ${lastName}`);
document.getElementById("p2").textContent = (`Your age is ${age}.`);
document.getElementById("p3").textContent = (`Your Dick Length is ${inches} inches.`);

