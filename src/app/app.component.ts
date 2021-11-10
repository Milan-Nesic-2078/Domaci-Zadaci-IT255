import { Component, Input } from '@angular/core';
import { Rooms } from './rooms.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  str1: string;

  str2: string;

  str3: string;

  searchText: string;

  rooms: Rooms[] = [];

  constructor(){


  }
  
  deleteRoom(arg: Rooms){

      delete arg.cenaSobe;

      delete arg.nazivSobe;

      delete arg.bNocenja;

    }

    dispInfo(arg){

      this.str1 = arg[0];

      this.str2 = arg[1];

      this.str3 = arg[2];

      console.log(this.str3);

      this.rooms.push(new Rooms(this.str1, this.str2, this.str3));

      

    }

}
