import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../student';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.css']
})
export class GetStudentComponent implements OnInit {

  students: Student[] = [];
  closeResult: string = '';
  name:string = ''
  email:string = ''
  age:number = 0
  gpa:number = 90
  constructor(private data: DataService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.students = this.data.getStudents();
    console.log(this.students)
  }
      
  open(content: any, id:number) {
    for (let index = 0; index < this.students.length; index++) {
      if(id == this.students[index].id) {
        this.name = this.students[index].name;
        this.email = this.students[index].email;
        this.age = this.students[index].age;
        this.gpa = this.students[index].gpa;
        console.log(this.students[index])
      }
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(result)
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public editStudent(id:number){
    for (let index = 0; index < this.students.length; index++) {
      if(id == this.students[index].id) {
        this.students[index].name = this.name;
        this.students[index].email = this.email;
        this.students[index].age = this.age;
        this.students[index].gpa = this.gpa;
        console.log(this.students[index])
        return this.data.editStudent(this.students[index]);
      }
    }

  }

  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
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
