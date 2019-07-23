import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'

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
import { ProfileMENUComponent } from './profile-menu/profile-menu.component';

const routes: Routes = [
  {path:'', component: HomeComponent, 
    data:{
      title: 'Home page!'
    } 
  },
  {path:'SignUp', component: SignUpComponent,
    data:{
      title: 'Log in HERE'
    }
  },
  {path:'Login', component: LoginComponent},
  {path:'Profile', component: ProfileComponent,
    children: [
      {path:'', component: ProfileMENUComponent},
      {path:'Send', component: SendEmailComponent}
    ]
  },
  {path:'Home2', component: Roogle2Component,
  data:{
    title: 'Home page!'
  } 

  },
  {path:'Send', component: SendEmailComponent,data:{
    title: 'Email'
  } 
  }
]


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
    Roogle2Component,
    ProfileMENUComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}




