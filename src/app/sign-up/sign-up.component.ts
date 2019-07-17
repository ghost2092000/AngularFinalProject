import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit{
  title = 'messageform';

  signupForm: FormGroup;

  ngOnInit(){
      //Do not call the Validators. Only pass the reference
  //  I NEED TO ADD THESE 
      this.signupForm = new FormGroup({
        'password': new FormControl(null, Validators.required),
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'password2': new FormControl(null,[Validators.required]),
        'name': new FormControl(null,[Validators.required])


       
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
