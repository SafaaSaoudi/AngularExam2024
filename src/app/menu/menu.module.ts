import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddmenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
