import{NgModule } from '@angular/core';
import{RouterModule, Routes } from '@angular/router';
import{CommonModule } from '@angular/common';
import{SendEmailComponent} from './send-email.component';
import { ReactiveFormsModule} from '@angular/forms';



const routes: Routes = [
    {
        path: '',
        component: SendEmailComponent,
        data:
        {
            title: 'Email'
        } 
    }

   
];

@NgModule({
    declarations: [SendEmailComponent   
    ],
    imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SendEmailModule{}
