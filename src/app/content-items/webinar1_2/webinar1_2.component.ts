import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-webinar1_2",
  templateUrl: "./webinar1_2.component.html",
  styleUrls: ["./webinar1_2.component.scss"],
})
export class Webinar1_2Component implements OnInit {
  width: number;
  constructor() {}

  videoURL = "https://www.youtube.com/embed/qsokDLHRORc";

  ngOnInit(): void {
    document.title = "CALL #1.2 PULL Q&A Webinar | HUBCAP";
  }

  onResize() {
    this.width = window.innerWidth;
  }
}
