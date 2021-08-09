import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './employee/home/home.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeUpdatedComponent } from './employee/employee-updated/employee-updated.component';
import { MaintanceComponent } from './employee/maintance/maintance.component';

const appRoutes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'home', component: HomeComponent},
      { path: 'employee-list', component: EmployeeListComponent},
      { path: 'employee-add', component: EmployeeAddComponent},
      { path: 'employee-detail', component: EmployeeDetailComponent},
      { path: 'employee-updated', component: EmployeeUpdatedComponent},
      { path: 'maintance', component: MaintanceComponent}
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
