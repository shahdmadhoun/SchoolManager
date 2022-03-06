import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetStudentComponent } from './get-student/get-student.component';
import { SearchComponent } from './search/search.component';
import { FilterPipePipe } from './filter-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    GetStudentComponent,
    SearchComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
