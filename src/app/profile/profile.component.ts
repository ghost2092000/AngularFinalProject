import { Component } from '@angular/core';

interface Email {
  name: string;
  date: number;
  subject: string;
  comment: string;
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  title = 'websiteLayout';

  x = 0;
  y = 0;

  public email : Email[];
  public newEmail: Email;

  constructor() {
    this.email = [{
      name: 'Robert',
      date: 1993, 
      subject:'First Email', 
      comment: 'This is an email. This is a cool email.'
    }];

    this.newEmail = {
      name: 'Jorge', 
      date: 1991, 
      subject: 'Hello', 
      comment: "Hello how are you???"
    };

    this.email.push(this.newEmail);

    this.newEmail = {
      name: 'Chung',
      date: 2018,
      subject: 'What is Chungus?',
      comment: 'According to Urban Dictionary, one of the top definitions for Chungus is An overweight giant earth destroying, god killing rabbit. In the memes, its basically a picture of a fat Bugs Bunny. ... The word "chungus" was coined by video game journalist Jim Sterling years before the meme went viral.'
    };

    this.email.push(this.newEmail);


  }

  goo(){

  this.x = this.x + 1;
  this.y = this.x % 2;

  if (this.y === 0){
  console.log(this.x + " " + this.y);
  // document.getElementById("redd").style.border = "5px solid red";
  document.getElementById("redd").style.display = "none";
  }

  if (this.y === 1){
    console.log(this.x + " " + this.y);
    // document.getElementById("redd").style.border = "5px solid blue";
    document.getElementById("redd").style.display = "block";
  }


}

  ///This method adds poeples information to the json object
  addEmail(namee: string, datee: number, subjectt: string, commentt:string) {
    if (namee) {
      this.newEmail = { name: namee, date: datee, subject: subjectt, comment: commentt };
      this.email.push(this.newEmail);
    }

  }



  messagee:string='hi';
  //Added this for childToParent
  receiveMessage($event){
    this.messagee = $event;
  }


}
