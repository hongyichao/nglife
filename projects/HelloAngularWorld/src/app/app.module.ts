import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NgisgoodComponent } from './ngisgood/ngisgood.component';
import { NgisbadComponent } from './ngisbad/ngisbad.component';
import { NgtouseornotComponent } from './ngtouseornot/ngtouseornot.component';

@NgModule({
  declarations: [
    AppComponent,
    NgisgoodComponent,
    NgisbadComponent,
    NgtouseornotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
