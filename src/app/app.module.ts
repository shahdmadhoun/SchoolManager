import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetStudentComponent } from './get-student/get-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    GetStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
