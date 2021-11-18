import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor() { }

  price: number;

  nPrice: number;

  setPrice(arr: number){

    this.price = arr;


  }

  getPricee(): number{

    return this.price;

  }




  getPrice(numberOfNights: number): number{

    return this.nPrice = this.price * numberOfNights;

  }

}
