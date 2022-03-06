import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../student';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  students: Student[] = [];
  searchText = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.students = this.data.getStudents();
    console.log(this.students)
  }

}
