import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from './Models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
 
  URL = 'http://localhost:3000/Menus';
  
  constructor( private http: HttpClient) { }

  getAllMenus(){
    return this.http.get<Menu[]>(this.URL);
  }

  getMenuById(id:number){ 
    return this.http.get<Menu>(this.URL+'/'+id);
  }

  addMenu(M:Menu){
    return this.http.post(this.URL, M);
  }

  updateMenu(M:Menu){
    return this.http.put(this.URL+'/'+M.id, M);
  }
  
}
