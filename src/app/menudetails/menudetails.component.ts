import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../Models/menu';

@Component({
  selector: 'app-menudetails',
  templateUrl: './menudetails.component.html',
  styleUrls: ['./menudetails.component.css']
})
export class MenudetailsComponent {

  menu!:Menu;
  id!:number;

  constructor(private menuS: MenuService, private actR: ActivatedRoute) { }
  ngOnInit() {
    this.actR.paramMap.subscribe( (params) => this.id = Number(params.get('id')));
    this.menuS.getMenuById(this.id).subscribe( (data) => this.menu = data);
  }

  note!: number;

onRateSubmit() {
  if (this.menu.mark === 0) {
    this.menu.mark = this.note;
  } else {
    this.menu.mark = (this.menu.mark + this.note) / 2;
  }
  this.menuS.updateMenu(this.menu).subscribe();
}

}

