import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Constants } from '../../app.constants';

@Injectable()
export class RestApiService {

  constructor(public http: HttpClient) {

  }

  private authorizationHeader() {
    const token = window.localStorage.getItem('https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=UxOzoFBdQrzhSghQdQTelG&redirect_uri=https://line-notify-front.herokuapp.com/home&scope=notify&state=NO_STATE' + '@token') ? window.localStorage.getItem('https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=UxOzoFBdQrzhSghQdQTelG&redirect_uri=https://line-notify-front.herokuapp.com/home&scope=notify&state=NO_STATE' + '@token') : '';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }
  private authorizationHeaderUrlencoded() {

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return headers;
  }
  private authorizationHeaderJson() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return headers;
  }

  get(url: string) {
    return this.http.get(url, { headers: this.authorizationHeader() }).toPromise();
  }

  post(url: string, Body: any) {
    return this.http.post(url, Body, { headers: this.authorizationHeader() }).toPromise();
  }

  put(url: string, Body: any) {
    return this.http.put(url, Body, { headers: this.authorizationHeader() }).toPromise();
  }

  delete(url: string) {
    return this.http.delete(url, { headers: this.authorizationHeader() }).toPromise();
  }

  getToken(url: string, body: any) {
    console.log(body);
    return this.http.post(url, body, { headers: this.authorizationHeaderJson() }).toPromise();
  }

}
