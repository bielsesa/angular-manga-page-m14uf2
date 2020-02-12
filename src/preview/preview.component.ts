import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.css"],
  animations: [
    trigger('preview', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class PreviewComponent implements OnInit {
  // baseImgName serà la uri de les imatges del manga especific
  @Input() baseImgName: string;
  @Output() deleteSelf: EventEmitter<void> = new EventEmitter<void>();
  pageCounter: number = 1;
  pageImgSrc: string = "";

  constructor() { }

  goLeftPage() {
    // comprova que no és el tope d'imatges per abaix
    if (--this.pageCounter < 1) this.pageCounter = 1;
    this.pageImgSrc = `${this.baseImgName}-${this.pageCounter}.jpg`;
  }

  goRightPage() {
    // comprova que no és el tope d'imatges per adalt
    if (++this.pageCounter > 4) this.pageCounter = 4;
    this.pageImgSrc = `${this.baseImgName}-${this.pageCounter}.jpg`;
  }

  ngOnInit() {
    this.pageImgSrc = `${this.baseImgName}-${this.pageCounter}.jpg`;
    console.log(`Imatge: ${this.pageImgSrc}`);
  }
}
