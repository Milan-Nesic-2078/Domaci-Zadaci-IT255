import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomServiceService } from './room-service.service';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipePipe,
    AddRoomsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RoomServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
