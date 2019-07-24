//Must have components 
import{ NgModule } from '@angular/core';
import{ RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

//This is the component 
import{SignUpComponent} from './sign-up.component';

//Components that i might have to use for other services
import { ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
    {
        path: '',
        component: SignUpComponent,
        data:
        {
            title: 'Sign UP'
        } 
    }
];

@NgModule({
    declarations: [SignUpComponent],
    imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SignUpModule{}
