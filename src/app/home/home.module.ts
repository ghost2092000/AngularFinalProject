//Must have components 
import{ NgModule } from '@angular/core';
import{ RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

//This is the component 
import{HomeComponent} from './Home.component';

//Components that i might have to use for other services
import { ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,  //
        data:
        {
            title: 'Home!'
        } 
    }
];

@NgModule({
    declarations: [HomeComponent],  //
    imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeModule{}  //