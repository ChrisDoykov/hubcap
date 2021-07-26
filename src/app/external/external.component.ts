import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-external",
  templateUrl: "./external.component.html",
  styleUrls: ["./external.component.scss"],
})
export class ExternalComponent implements OnInit {
  width: number;
  constructor(public meta: Meta, public title: Title) {}

  openApplyPage() {
    window.open("https://www.f6s.com/hubcapcall1-2pull/apply", "_blank");
  }

  ngOnInit(): void {
    this.title.setTitle("External Applications | HUBCAP");
  }

  onResize() {
    this.width = window.innerWidth;
  }
}
