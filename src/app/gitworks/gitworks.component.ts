import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: "app-gitworks",
  templateUrl: "./gitworks.component.html",
  styleUrls: ["./gitworks.component.scss"],
})

export class GitworksComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    document.title = "Sustainability | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Sustainability";
    }
  }
}
