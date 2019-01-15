import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import mergeImages from 'merge-images';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;
  frameImg: any;

  constructor() {
    
  }

  ngOnInit() {
  }
  testNotify(){
    console.log('object');
    window.location.href="https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=UxOzoFBdQrzhSghQdQTelG&redirect_uri=https://line-notify-front.herokuapp.com/home&scope=notify&state=NO_STATE"
  }

}
