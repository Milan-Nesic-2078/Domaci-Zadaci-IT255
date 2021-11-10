import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipePipe,
    AddRoomsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
