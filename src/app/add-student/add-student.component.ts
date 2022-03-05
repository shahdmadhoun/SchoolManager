import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  public student: Student = {
    id: 6,
    name: 'my name',
    email: 'gmail@gmail.com',
    age: 20,
    gpa: 90
  }
  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  public addStudent() {
    this.student.id = this.data.students.length + 1;
    this.data.addStudent(this.student);
    console.log(this.data.students);
  }

}
