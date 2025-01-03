import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenudetailsComponent } from './menudetails/menudetails.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'reservations', loadChildren:()=>import('./reservation/reservation.module').then(m=>m.ReservationModule)},
  {path:'menu', loadChildren:()=>import('./menu/menu.module').then(m=>m.MenuModule)},
  {path: 'details/:id', component: MenudetailsComponent },
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
