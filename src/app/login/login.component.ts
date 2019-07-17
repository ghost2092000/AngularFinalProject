import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  title = 'messageform';

  signupForm: FormGroup;

  ngOnInit(){
      //Do not call the Validators. Only pass the reference
  //  I NEED TO ADD THESE 
      this.signupForm = new FormGroup({
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'password': new FormControl(null,[Validators.required])
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
