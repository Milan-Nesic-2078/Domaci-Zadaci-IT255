import { Component } from '@angular/core';
import { Rooms } from './rooms.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchText: string;

  rooms: Rooms[] = [];
  
  addRoom(naziv: HTMLInputElement, cena: HTMLInputElement){

    this.rooms.push(new Rooms(naziv.value, cena.value));


  }


}
