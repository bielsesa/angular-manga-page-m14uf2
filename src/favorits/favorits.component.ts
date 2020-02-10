import { Component, OnInit } from '@angular/core';
import { Manga, Genere } from '../classes/Manga';
import { Autor } from '../classes/Autor';
@Component({
  selector: 'app-favorits',
  templateUrl: './favorits.component.html',
  styleUrls: ['./favorits.component.css']
})
export class FavoritsComponent implements OnInit {

  public llistaFavorits: Array<any>=[];
  public llistaFavorits2: Array<any>=[];
  
  constructor() { 
    this.leerLocalStorage();
  }

  ngOnInit() {
  }

  leerLocalStorage() {
    for (var i = 0; i < localStorage.length; i++) {
      this.llistaFavorits.push(localStorage.getItem(localStorage.key(i)));
      
      
    }
    //PARSEAMOS CADA UNO DE LOS OBJETOS JSON A Object para que el html peuda leer sus propiedades!
    this.llistaFavorits.forEach(e => {
      this.llistaFavorits2.push(JSON.parse(e));
    });
    
  }

  info(e){

    alert(JSON.stringify(e));
  }
}
