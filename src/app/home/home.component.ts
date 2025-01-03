import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../Models/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  listMenus!:Menu[];

  constructor(private menuS:MenuService) { }

  ngOnInit() {
    this.menuS.getAllMenus().subscribe(
      (data) => {
        this.listMenus = data.filter(menu => menu.approved);
      }
    );
  }
}
