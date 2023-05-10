import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Custom1Component } from './custom1/custom1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
  { path: "", component: DashboardComponent, pathMatch: "full" },
  { path: "editForm", component: EditFormComponent, pathMatch: "full" },
  { path: "custom1", component: Custom1Component, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DashboardComponent, EditFormComponent, Custom1Component],
  exports: [RouterModule]
})
export class AppRoutingModule { }
