import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListreservationsComponent } from './listreservations/listreservations.component';

const routes: Routes = [
  {path:'', component:ListreservationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
