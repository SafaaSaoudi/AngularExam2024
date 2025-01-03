import { Component, Input } from '@angular/core';
import { Menu } from '../Models/menu';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuc',
  templateUrl: './menuc.component.html',
  styleUrls: ['./menuc.component.css']
})
export class MenucComponent {
@Input() approvedMenu!: Menu;


constructor(private menuS:MenuService, private R:Router){}

Reserver(){
  
  this.approvedMenu.reservations.push(1);
  this.menuS.updateMenu(this.approvedMenu).subscribe(
    (data) => {
      alert('Reservation effectuée avec succès');
this.R.navigate(['/home']);
    }
  );

}
}
