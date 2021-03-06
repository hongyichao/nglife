import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MymessagesComponent } from './mymessages/mymessages.component';
import { MymessageComponent } from './mymessage/mymessage.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MyMessage } from './shared-model/myMessage';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'myprofile/:email', component: MyprofileComponent,
    children: [
      { path: 'mymessage', component: MymessageComponent},
      { path: 'mymessage/:id', component: MymessageComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MymessagesComponent,
    MymessageComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
