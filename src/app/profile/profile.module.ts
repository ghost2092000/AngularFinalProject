//Must have components 
import{ NgModule } from '@angular/core';
import{ RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

//This is the component 
import{ProfileComponent} from './profile.component';

//Components that i might have to use for other services
import { ReactiveFormsModule} from '@angular/forms';
import{ CommentComponent} from '../comment/comment.component';
import { ProfileMENUComponent } from '../profile-menu/profile-menu.component';
import { InboxComponent } from '../inbox/inbox.component';




const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,  //
        data:
        {
            title: 'Profile'
        } ,
        children: [
            {path: '', component: ProfileMENUComponent},
        ]
    }
    
];

@NgModule({
    declarations: [ProfileComponent,CommentComponent, ProfileMENUComponent,InboxComponent],  //
    imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ProfileModule{}  //