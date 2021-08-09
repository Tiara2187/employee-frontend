import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './employee/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminsRoutingModule } from './admins-routing.module';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeUpdatedComponent } from './employee/employee-updated/employee-updated.component';
import { MaintanceComponent } from './employee/maintance/maintance.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeDetailComponent,
    EmployeeUpdatedComponent,
    MaintanceComponent
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    HttpClientModule,
    NgbModule
  ]
})
export class AdminsModule { }
