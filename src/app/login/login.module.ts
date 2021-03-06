import{NgModule } from '@angular/core';
import{RouterModule, Routes } from '@angular/router';
import{CommonModule } from '@angular/common';
import{LoginComponent} from './login.component';
import { RoogleComponent } from '../roogle/roogle.component';
import { ReactiveFormsModule} from '@angular/forms';



const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data:
        {
            title: 'Log In!'
        } 
    }

   
];

@NgModule({
    declarations: [LoginComponent   , RoogleComponent
    ],
    imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class LoginModule{}
