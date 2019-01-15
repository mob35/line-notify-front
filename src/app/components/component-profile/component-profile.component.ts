import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-profile',
  templateUrl: './component-profile.component.html',
  styleUrls: ['./component-profile.component.css']
})
export class ComponentProfileComponent implements OnInit {

  @Input() getFrameImg: any = [];

  constructor() {

  }

  ngOnInit() {
  }

  clickTest() {
    console.log(this.getFrameImg);

  }

}
