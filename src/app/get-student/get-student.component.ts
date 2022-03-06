import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.css']
})
export class GetStudentComponent implements OnInit {

  students: Student[] = [];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.students = this.data.getStudents();
    console.log(this.students)
  }

  public editStudent(id:number){
    for (let index = 0; index < this.data.getStudents().length; index++) {
      if(this.students[index].id == id) {
        this.students[index].name = "new name";
        this.students[index].gpa = 100;
        this.students[index].age = 11;
        this.students[index].email = "new@gmail.com";
        return this.data.editStudent(this.students[index]);
      }
    }
  }

  public deleteStudent(id:number){
    for (let index = 0; index < this.data.getStudents().length; index++) {
      if(this.students[index].id == id) {
        return this.data.deleteStudent(this.students[index]);
      }
    }
  }

}
