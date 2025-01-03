import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmenuComponent } from './addmenu/addmenu.component';

const routes: Routes = [
  {path:'', component:AddmenuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
