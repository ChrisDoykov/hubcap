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
    document.title = "Press Release | HUBCAP";
    document.getElementById("hero-title").textContent = "Press Release";
    const url = window.location.href.toString();
    if (url.includes("call1-1")) {
      this.pressRelease = "1-1";
    } else if (url.includes("call1-2")) {
      this.pressRelease = "1-2";
    } else {
      this.router.navigate(["/not-found"]);
    }
  }
}
