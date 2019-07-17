import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})

export class SendEmailComponent implements OnInit{
  title = 'messageform';

  signupForm: FormGroup;

  ngOnInit(){
      //Do not call the Validators. Only pass the reference
  //  I NEED TO ADD THESE 
      this.signupForm = new FormGroup({
        'subject': new FormControl(null, Validators.required),
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'cc': new FormControl(null),
        'bcc': new FormControl(null),
        'body': new FormControl(null),
        'hyperlink': new FormControl(null)
      });
  
    //when a person clicks the button 
      // Subscribe to value status
      this.signupForm.statusChanges.subscribe(
        (status) => console.log(status)
    );
   
}	

OnSubmit(){
  console.log(this.signupForm.value);
}
  
}
