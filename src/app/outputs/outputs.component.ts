import { Component, OnInit } from "@angular/core";
import { deliverables } from "./deliverables";
import { papers } from "./papers";

@Component({
  selector: "app-outputs",
  templateUrl: "./outputs.component.html",
  styleUrls: ["./outputs.component.scss"],
})
export class OutputsComponent implements OnInit {
  width: number;
  constructor() {}

  deliverables = deliverables;
  papers = papers;

  ngOnInit(): void {
    document.title = "Project Outputs | HUBCAP";

    this.onResize();
  }

  onResize() {
    this.width = window.innerWidth;
  }
}
