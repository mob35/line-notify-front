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
  }

}
