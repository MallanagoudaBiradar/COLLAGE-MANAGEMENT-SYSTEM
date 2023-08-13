import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { FeesComponent } from './fees/fees.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AdmissionComponent } from './admission/admission.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  { path: 'attendance', component: AttendanceComponent },
  { path: 'fees', component: FeesComponent },
  { path: 'student-details', component: StudentDetailsComponent },
  { path: 'payment-gateway', component: PaymentGatewayComponent },
  { path: 'staffdetails', component: StaffdetailsComponent },
  { path:'coursedetails',component:CourseDetailsComponent},
  {path:'admission', component:AdmissionComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'login', component:LoginComponent},
  {path:'Home',
 component:HomeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

