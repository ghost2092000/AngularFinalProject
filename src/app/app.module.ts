import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RoogleComponent } from './roogle/roogle.component';
import { CommentComponent } from './comment/comment.component';
import { InboxComponent } from './inbox/inbox.component';
import { Roogle2Component } from './roogle2/roogle2.component';

@NgModule({
  declarations: [
    AppComponent,
    SendEmailComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent,
    RoogleComponent,
    CommentComponent,
    InboxComponent,
    Roogle2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'SignUp', component: SignUpComponent},
      {path:'SendEmail', component: SendEmailComponent},
      {path:'Login', component: LoginComponent},
      {path:'Profile', component: ProfileComponent},
      {path:'Home2', component: Roogle2Component},





    ])
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




