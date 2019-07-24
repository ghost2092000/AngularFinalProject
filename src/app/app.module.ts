import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', 
  loadChildren: () => import('./home/home.module') .then(m => m.HomeModule)
  },

  {path:'SignUp',   
  loadChildren: () => import('./sign-up/sign-up.module') .then(m => m.SignUpModule)
  },

  {path:'Login',   
  loadChildren: () => import('./login/login.module') .then(m => m.LoginModule),
  
},
  {path:'Profile', 
  loadChildren: () => import('./profile/profile.module') .then(m => m.ProfileModule),
    
  },

  {path:'Home2',
  loadChildren: () => import('./roogle2/roogle2.module') .then(m => m.Roogle2Module)
  },

  {path:'Email',
  loadChildren: () => import('./send-email/send-email.module') .then(m => m.SendEmailModule)
  }
]


@NgModule({
  declarations: [
    AppComponent,
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




