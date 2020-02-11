import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.css"]
})
export class PreviewComponent implements OnInit {
  // baseImgName serà la uri de les imatges del manga especific
  @Input() baseImgName: string;
  pageCounter: number = 1;
  pageImgSrc: string = "";

  constructor() { }

  goLeftPage() {
    // comprova que no és el tope d'imatges per abaix
    if (--this.pageCounter < 1) this.pageCounter = 1;
    this.pageImgSrc = `${this.baseImgName}-${this.pageCounter}`;
  }

  goRightPage() {
    // comprova que no és el tope d'imatges per adalt
    if (++this.pageCounter > 4) this.pageCounter = 4;
    this.pageImgSrc = `${this.baseImgName}-${this.pageCounter}`;
  }

  ngOnInit() {
    this.pageImgSrc = `${this.baseImgName}-${this.pageCounter}`;
  }
}
