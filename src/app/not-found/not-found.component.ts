import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"],
})
export class NotFoundComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    document.title = "Not Found | HUBCAP";
    if (document.getElementById("hero") !== null) {
      document.getElementById("hero").style.transform = "translateX(-1000rem)";
      document.getElementById("hero").style.position = "absolute";
    }
  }

  ngOnDestroy(): void {
    if (document.getElementById("hero") !== null) {
      document.getElementById("hero").style.transform = "translateX(0)";
      document.getElementById("hero").style.position = "relative";
    }
  }
}
