import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/menu.service';
import { Menu } from 'src/app/Models/menu';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent {
  addMenuForm!: FormGroup;
 
  
constructor(private menuS:MenuService, private R: Router, private fb:FormBuilder){}

ngOnInit(){this.addMenuForm = this.fb.group({
  titre: ['', Validators.required],  // Champ titre obligatoire
  description: ['', [Validators.required, Validators.minLength(10)]],  // Champ description obligatoire et min 10 caractères
});}

get titre() { return this.addMenuForm.get('titre'); }
get description() { return this.addMenuForm.get('description'); }


  save(){
    if (this.addMenuForm.valid) {
      const newMenu = {
        id: Math.floor(Math.random() * (50 - 1 + 1)) + 1,
        title: this.addMenuForm.value.titre,
        image: 'https://www.lesfousdeterroirs.fr/wp-content/uploads/2019/03/restaurant',
        description: this.addMenuForm.value.description,
        approved: false,  
        mark: 0,  
        reservations: []      
      };
console.log(newMenu);

    this.menuS.addMenu(newMenu).subscribe(
      ()=>{
           this.R.navigate(['home']);
      }
    );

  }}


}
