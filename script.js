//complete this code
class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // Name getter
    get name(): string {
        return this._name;
    }

    // Age getter
    get age(): number {
        return this._age;
    }

    // Age setter
    set age(age: number) {
        this._age = age;
    }
}

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }

    study(): void {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }

    teach(): void {
        console.log(`${this.name} is teaching`);
    }
}

// Example usage:
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach();  // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
