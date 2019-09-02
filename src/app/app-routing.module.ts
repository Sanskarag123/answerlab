import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeComponent } from './code/code.component';
import { ContributeComponent } from './contribute/contribute.component';


const routes: Routes = [{path:'code',component:CodeComponent},
{path:'contribute',component:ContributeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
