import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;
  frameImg: any;

  constructor(private api: RestApiService) {
    
  }

  ngOnInit() {

  }
  
  testNotify(){
    console.log('object');
    // this.http.get('https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=UxOzoFBdQrzhSghQdQTelG&redirect_uri=https://line-notify-front.herokuapp.com/home&scope=notify&state=NO_STATE');
    // window.location.href="https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=UxOzoFBdQrzhSghQdQTelG&redirect_uri=https://line-notify-front.herokuapp.com/home&scope=notify&state=NO_STATE"
  }

  async getNotify() {
    // let data:any ={
      
    // }
      const response: any = await this.api.getNo('https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=UxOzoFBdQrzhSghQdQTelG&redirect_uri=https://line-notify-front.herokuapp.com/home&scope=notify&state=NO_STATE');
    console.log(response)
    }
   
}
