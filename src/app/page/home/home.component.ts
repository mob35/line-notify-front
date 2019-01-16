import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  code: any;
  constructor(
    private route: ActivatedRoute,
    private api: RestApiService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.code) {
        this.code = params['code'];
        console.log(this.code);
        this.getToken();
      }
    });
  }

  // testNotify() {
  // console.log('object');
  // this.http.get('https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=UxOzoFBdQrzhSghQdQTelG&redirect_uri=https://line-notify-front.herokuapp.com/home&scope=notify&state=NO_STATE');
  // window.location.href="https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=UxOzoFBdQrzhSghQdQTelG&redirect_uri=https://line-notify-front.herokuapp.com/home&scope=notify&state=NO_STATE"
  // }

  getNotify() {
    let data: any = {
      client_id: 'UxOzoFBdQrzhSghQdQTelG',
      redirect_uri: 'https://line-notify-front.herokuapp.com/home'
    }
    window.location.href = "https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=" + data.client_id + "&redirect_uri=" + data.redirect_uri + "&scope=notify&state=NO_STATE";
  }

  async getToken() {
    const body = new HttpParams()
    .set('grant_type', 'authorization_code')
    .set('code', this.code)
    .set('redirect_uri', 'https://line-notify-front.herokuapp.com/home')
    .set('client_id', 'UxOzoFBdQrzhSghQdQTelG')
    .set('client_secret', 'snij94Bv2deyxqGrv4sf91ZNgvbAv2woRdzFAFh9qUs');
    
    try {
      const res: any = await this.api.getToken('https://notify-bot.line.me/oauth/token', body);
      console.log(res.access_token);
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

}
