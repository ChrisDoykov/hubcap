import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent implements OnInit {
  constructor(private router: Router) {}

  content = "";

  ngOnInit(): void {
    const url = window.location.href.toString();
    if (url.includes("newsletters/newsletter-10-20")) {
      this.content = "newsletter-10-20";
    } else if (url.includes("news-items/SAE")) {
      this.content = "news-item-sae";
    } else if (url.includes("open-calls/1.2-webinar")) {
      this.content = "1.2-webinar";
    } else if (url.includes("video/general")) {
      this.content = "video-general";
    } else if (url.includes("video/experiment")) {
      this.content = "video-experiment";
    } else {
      this.router.navigate(["/not-found"]);
    }
  }
}
