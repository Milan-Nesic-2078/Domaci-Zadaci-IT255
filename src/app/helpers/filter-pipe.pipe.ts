import { Pipe, PipeTransform } from '@angular/core';
import { Rooms } from '../rooms.model';

@Pipe({
  name: 'filter'
})
export class FilterPipePipe implements PipeTransform {

  transform(rooms: Rooms[], searchText: any): any[] {
    if(!rooms) return [];
    if(!searchText) return rooms;
    searchText = searchText.toLowerCase();
    return rooms.filter( it => {
    return it.cenaSobe.toLowerCase().includes(searchText);
    });
  }
}