

class Person {

	constructor(name, email, phone) {
	this.name = name;
	this.email = email;
	this.phone = phone;
}
	displayEmail() {
		console.log(this.email);
}
}
let person = new Person("aleksandar","alexandar2612@gmail.com", "065664571")

console.log(person.phone); 

