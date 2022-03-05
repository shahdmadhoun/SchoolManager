import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { GetStudentComponent } from './get-student/get-student.component';



const routes: Routes = [
  { path: 'all-students', component: GetStudentComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: '', component: GetStudentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
