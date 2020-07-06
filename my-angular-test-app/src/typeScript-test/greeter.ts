class Student {
    fullName: String;
    constructor(public firstName: String, public middleName: String, public lastName: String) {
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}

interface Person {
    firstName: String,
    lastName: String
}

function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

let userObj = {firstName: "Gubendran", lastName: "Lakshmanan"};
document.body.textContent=greeter(userObj);

let user = new Student("Gubendran", " Chennai ", "Laksh");
document.body.textContent=greeter(user);