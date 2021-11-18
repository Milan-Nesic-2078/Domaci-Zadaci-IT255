import { Component, Input, OnInit } from '@angular/core';
import { RoomServiceService } from './room-service.service';
import { Rooms } from './rooms.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  str1: string;

  str2: number;

  str3: number;

  public str4: any;

  str5: number;

  searchText: string;

  rooms: Rooms[] = [];

  constructor(private _roomService: RoomServiceService){

  }

  deleteRoom(arg: Rooms){

      delete arg.cenaSobe;

      delete arg.nazivSobe;

      delete arg.bNocenja;

      delete this.str5;

    }

    dispInfo(arg){

      this.str1 = arg[0];
      
      if (this.str1.length < 6) {

        console.log("Duzina je manja od 6 karaktera!")
        
      }

      this.str2 = parseInt(arg[1]);

      this.str3 = parseInt(arg[2]);

      this._roomService.setPrice(this.str2);

      this.str5 = this._roomService.getPrice(this.str3);

      this.rooms.push(new Rooms(this.str1, this.str2, this.str3, this.str5));

    }

}
