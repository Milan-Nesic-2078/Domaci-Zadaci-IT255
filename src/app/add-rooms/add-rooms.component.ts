import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css']
})
export class AddRoomsComponent implements OnInit {


  @Output() emitRoom: EventEmitter<any>

  arr: string[] = [];

  constructor() { 

    this.emitRoom = new EventEmitter();
    

  }


  ngOnInit(): void {
  }



  addRoom(name: HTMLInputElement, price: HTMLInputElement, bNocenja: HTMLInputElement){

    this.arr.push(name.value, price.value, bNocenja.value);

    this.emitRoom.emit(this.arr);

   while(this.arr.length){

    this.arr.pop();

   }

  }

}
