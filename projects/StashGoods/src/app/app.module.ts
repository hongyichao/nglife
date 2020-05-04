import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TobuyComponent } from './tobuy/tobuy.component';
import { FoodComponent } from './tobuy/food/food.component';
import { ComputerComponent } from './tobuy/computer/computer.component';

@NgModule({
  declarations: [
    AppComponent,
    TobuyComponent,
    FoodComponent,
    ComputerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
