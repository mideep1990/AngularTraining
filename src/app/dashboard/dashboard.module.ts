import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { InnerComponent } from './inner/inner.component';
import { OuterComponent } from './outer/outer.component';




@NgModule({
  declarations: [
    DashboardComponent,
    InnerComponent,
    OuterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent
  ],
  providers:[]
})
export class DashboardModule { }
