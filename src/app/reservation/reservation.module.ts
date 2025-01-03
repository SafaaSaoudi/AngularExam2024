import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ListreservationsComponent } from './listreservations/listreservations.component';


@NgModule({
  declarations: [
    ListreservationsComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule
  ]
})
export class ReservationModule { }
