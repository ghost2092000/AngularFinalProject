import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { 
   
  
    
  }

  ngOnInit() {
  

  }

  // animation-name: example;
  // animation-duration: 15s;
  turnON(){
    const square = document.getElementById('textON1');
    square.style.animationName = 'example';
    square.style.animationDuration = '25s';
    square.style.animationFillMode = 'forwards';
    //  animation-fill-mode: forwards;

    console.log('hi');

    const square2 = document.getElementById('textON2');
    square2.style.animationName = 'example2';
    square2.style.animationDuration = '10s';
    square2.style.animationFillMode = 'forwards';

    // square2.style.animationDelay= 's';


    const square3 = document.getElementById('backgroundImage');
    square3.style.animationName = 'example3';
    square3.style.animationDuration = '10s';
    square3.style.animationFillMode = 'forwards';

    const square4 = document.getElementById('bckground');
    square4.style.animationName = 'example4';
    square4.style.animationDuration = '20s';
    square4.style.animationFillMode = 'forwards';

    const square5 = document.getElementById('log');
    square5.style.animationName = 'example5';
    square5.style.animationDuration = '15s';
    square5.style.animationFillMode = 'forwards';
   

    const square6 = document.getElementById('spann');
    square6.style.animationName = 'animate';
    square6.style.animationDuration = '5s';
    square6.style.animationFillMode = 'forwards';


    var strange = new Audio();
    strange.src = "assets/image/stranger.mp3";
    strange.play();


  }


}
