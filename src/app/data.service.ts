import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public students: Student[] = [
    {id: 1,name: "shahd madhoun", email: "shahdem@gmail.com", age: 22, gpa: 88},
    {id: 2,name: "sara", email: "sara@gmail.com", age: 20, gpa: 90},
    {id: 3,name: "ali", email: "ali@gmail.com", age: 25, gpa: 75},
  ];

  searchOption=[]
      //  postUrl : string = "https://jsonplaceholder.typicode.com/posts";

  constructor() { }

  public getStudents<Student>() {
    return this.students;
  }

  public addStudent(student: Student) {
    return this.students.push(student);
  }

  public editStudent(student: Student) {
    for (let index = 0; index < this.students.length; index++) {
      if(this.students[index].id == student.id) {
        this.students[index].name = student.name;
        this.students[index].age = student.age;
        this.students[index].gpa = student.gpa;
        this.students[index].email = student.email;
        console.log(this.students)
      }
    }
  }

  public deleteStudent(student: Student) {
    for (let index = 0; index < this.students.length; index++) {
      if(this.students[index].id == student.id) {
        this.students.indexOf(student)
        // this.students.pop(this.students[index])
        this.students.splice(this.students.indexOf(this.students[index]), 1);  

        console.log(this.students)
      }
    }
  }


}
