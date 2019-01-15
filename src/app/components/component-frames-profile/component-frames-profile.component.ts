import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Frame {
  id: string;
  image: string;
}


@Component({
  selector: 'app-component-frames-profile',
  templateUrl: './component-frames-profile.component.html',
  styleUrls: ['./component-frames-profile.component.css']
})
export class ComponentFramesProfileComponent implements OnInit {
  check: any = {
    id: ''
  }
  @Output() sendFrame = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  image: Frame[] = [
    { id: "1", image: "./assets/img/frame-0.png" },
    { id: "2", image: "./assets/img/frame-1.png" },
    { id: "3", image: "./assets/img/frame-2.png" },
    { id: "4", image: "./assets/img/frame-3.png" },
    { id: "5", image: "https://res.cloudinary.com/dyiuidzsc/image/upload/v1546922692/Rabu%20Rabu/f1.png" },
    { id: "6", image: "https://res.cloudinary.com/dyiuidzsc/image/upload/v1546922690/Rabu%20Rabu/f3.png" },
    { id: "7", image: "https://res.cloudinary.com/dyiuidzsc/image/upload/v1546922692/Rabu%20Rabu/f4.png" },
    { id: "8", image: "https://res.cloudinary.com/dyiuidzsc/image/upload/v1546922692/Rabu%20Rabu/f1.png" },

  ]

  select(img) {
    // console.log(img)
    this.check.id = img.id
    this.sendFrame.emit(img);
  }
}
