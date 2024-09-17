// Task 1: Teacher interface with required and optional properties
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Create a Teacher object with extra properties
let teacher3: Teacher = {
  firstName: 'lea',
  fullTimeEmployee: false,
  lastName: 'julee',
  location: 'London',
  contract: false,
};
console.log(teacher3);


// Task 2: Directors interface extends Teacher and adds `numberOfReports`
interface Directors extends Teacher {
  numberOfReports: number;
}
// Create a Directors object
const director1: Directors = {
  firstName: 'lea',
  fullTimeEmployee: false,
  lastName: 'julee',
  location: 'London',
  contract: false,
  numberOfReports: 21,
};
// Logs director1 object
console.log(director1);


// Task 3: Function type interface to format and print names
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
// Implement function to print formatted name
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return firstName[0].toUpperCase() + ". " + lastName;
};
// Logs "J. Doe"
console.log(printTeacher("John", "Doe"));


// Task 4: Interfaces and Class for Student
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructable {
  new(firstName: string, lastName: string): StudentClassInterface;
}

// Class implements Student interface
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  age: number;
  location: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass('John', 'Doe');
console.log(student.displayName());    // Logs "John"
console.log(student.workOnHomework()); // Logs "Currently working"
