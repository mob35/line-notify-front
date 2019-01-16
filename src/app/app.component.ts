import { Component } from '@angular/core';
import { FacebookService, InitParams, UIParams, UIResponse, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-web';

  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '505731703273049',
      version: 'v3.2'
    };

    fb.init(initParams);

    // this.shareWithOpenGraphActions();
    // this.login();
  }

  login() {
    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
  }

  shareWithOpenGraphActions() {
    const params: UIParams = {
      method: 'share',
      action_type: 'og.likes',
      action_properties: JSON.stringify({
        object: {
          // 'og:url': 'https://angular-for-seo.firebaseapp.com',
          'og:title': 'หัวข้ออันบั๊กเอ้ก',
          // 'og:description': 'ข้อความยาว ๆ',
          'og:image': 'https://futurism.com/wp-content/uploads/2017/09/download-600x315.png'
        }
      })
    };
    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  }
}
