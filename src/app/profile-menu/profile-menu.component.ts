import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMENUComponent implements OnInit {

  x = 0;
  y = 0;
  
  constructor() { }

  ngOnInit() {
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
  
}
