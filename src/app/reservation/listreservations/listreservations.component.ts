import { Component } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Menu } from 'src/app/Models/menu';

@Component({
  selector: 'app-listreservations',
  templateUrl: './listreservations.component.html',
  styleUrls: ['./listreservations.component.css']
})
export class ListreservationsComponent {
 reservedMenus!:Menu[];
  constructor(private menuS:MenuService) { }

  ngOnInit() {
 this.menuS.getAllMenus().subscribe(  (data) => { 
  this.reservedMenus = data; 
  this.reservedMenus = this.reservedMenus.filter((reservedMenus) =>
    reservedMenus.reservations.includes(1));
  console.log(this.reservedMenus);
});



}
}
