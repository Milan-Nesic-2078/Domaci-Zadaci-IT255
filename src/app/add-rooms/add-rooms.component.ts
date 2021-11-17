import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css']
})
export class AddRoomsComponent implements OnInit {


  @Output() emitRoom: EventEmitter<any>

  arr: string[] = [];

  nroomName: string;

  myForm : FormGroup;

  name: string;

  price: string


  constructor(private fb: FormBuilder) { 

    this.myForm = this.fb.group({

      rName : ['', Validators.required],
  
      rPrice: ['', Validators.required],
  
      nights: ['', Validators.required]
  
    });

    this.emitRoom = new EventEmitter();

  }

  ngOnInit(): void {

  }

  onSubmit(name: HTMLInputElement, price: HTMLInputElement, bNocenja: HTMLInputElement ){

    this.arr.push(name.value, price.value, bNocenja.value);

    this.emitRoom.emit(this.arr);

   while(this.arr.length){

    this.arr.pop();

    }

  }
  
}
