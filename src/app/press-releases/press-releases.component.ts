import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-press-releases",
  templateUrl: "./press-releases.component.html",
  styleUrls: ["./press-releases.component.scss"],
})
export class PressReleasesComponent implements OnInit {
  constructor(private router: Router) {}

  pressRelease = "";

  ngOnInit(): void {
    const url = window.location.href.toString();
    if (url.includes("call1-1")) {
      this.pressRelease = "1-1";
    } else if (url.includes("call1-2")) {
      this.pressRelease = "1-2";
    } else if (url.includes("call1-3")) {
      this.pressRelease = "1-3";
    } else if (url.includes("call1-4")) {
      this.pressRelease = "1-4";
    } else if (url.includes("call1-5")) {
      this.pressRelease = "1-5";
    } else if (url.includes("call2-1")) {
      this.pressRelease = "2-1";
    } else if (url.includes("call2-2")) {
      this.pressRelease = "2-2";
    } else if (url.includes("call3")) {
      this.pressRelease = "3";
    } else {
      this.router.navigate(["/not-found"]);
    }
  }
}
