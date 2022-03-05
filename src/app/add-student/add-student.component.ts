import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  categories = [];
  @ViewChild('name') inputName: any;
  @ViewChild('email') inoutemail: any;
  @ViewChild('age') inputage: any;
  @ViewChild('gpa') inputgpa: any;

  public student: Student = {
    id: 6,
    name: 'my name',
    email: 'gmail@gmail.com',
    age: 20,
    gpa: 90
  }

  selectChangeHandler (event: any) {
    this.inoutemail = event.target.value;
  }
  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  addStudent(student: Student){
    this.student.id = this.data.students.length + 1;
    this.data.addStudent(student)
    console.log(this.data.students);

  }


  // public addStudent() {
  //   this.student.id = this.data.students.length + 1;
  //   this.data.addStudent(this.student);
  //   console.log(this.data.students);
  // }

}
