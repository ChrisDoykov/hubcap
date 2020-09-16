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
    document.getElementById("hero").style.height = "0";
  }

  ngOnDestroy(): void {
    document.getElementById("hero").style.height = "90vh";
  }
}
