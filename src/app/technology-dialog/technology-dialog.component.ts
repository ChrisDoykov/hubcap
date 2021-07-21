import { Component, OnInit, Inject, Injectable } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-technology-dialog",
  templateUrl: "./technology-dialog.component.html",
  styleUrls: ["./technology-dialog.component.scss"],
})
@Injectable()
export class TechnologyDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {}

  asset = this.data.asset;
  width = window.innerWidth;
  windowHeight = window.innerHeight;

  ngOnInit(): void {}

  onResize() {
    this.width = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }
}
