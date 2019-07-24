import{NgModule } from '@angular/core';
import{RouterModule, Routes } from '@angular/router';
import{CommonModule } from '@angular/common';
import{Roogle2Component} from './roogle2.component';
import {ReactiveFormsModule} from '@angular/forms';



const routes: Routes = [
    {
        path: '',
        component: Roogle2Component,
        data:
        {
            title: 'Roogle'
        } 
    }

   
];

@NgModule({
    declarations: [Roogle2Component   
    ],
    imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class Roogle2Module{}
