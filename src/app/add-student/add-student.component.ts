import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  students: Student[]= [];
  @ViewChild('name') inputName: any;
  @ViewChild('email') inoutemail: any;
  @ViewChild('age') inputage: any;
  @ViewChild('gpa') inputgpa: any;

  selectChangeHandler (event: any) {
    this.inoutemail = event.target.value;
  }
  constructor(public data: DataService) {
    this.students = data.getStudents();
   }

  ngOnInit(): void {
  }

  addStudent(student: Student){
    student.id = this.students.length + 1;
    console.log(student.id);

    this.data.addStudent(student)
    console.log(this.data.students);

  }


  // public addStudent() {
  //   this.student.id = this.data.students.length + 1;
  //   this.data.addStudent(this.student);
  //   console.log(this.data.students);
  // }

}
