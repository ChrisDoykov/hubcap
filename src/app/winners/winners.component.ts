import { Component, OnInit } from "@angular/core";
import { WINNERS, SME } from "./winners-list";

@Component({
  selector: "app-winners",
  templateUrl: "./winners.component.html",
  styleUrls: ["./winners.component.scss"],
})
export class WinnersComponent implements OnInit {
  constructor() {}

  width: number;
  elements_fade_in: any;
  windowHeight: any;

  winners: SME[] = WINNERS;
  rowsOf4: [SME[]] = [[]];
  rowsOf5: [SME[]] = [[]];

  ngOnInit(): void {
    document.title = "Call Winners | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Call Winners";
    }

    let size = 4;
    let sizeOf5 = 5;
    this.rowsOf4.splice(0, 1);
    this.rowsOf5.splice(0, 1);
    this.rowsOf4.push(this.winners.slice(0, 3));
    this.rowsOf5.push(this.winners.slice(0, 4));
    for (let i = 3; i < this.winners.length; i += size) {
      this.rowsOf4.push(this.winners.slice(i, i + size));
    }
    console.log(this.rowsOf4);
    for (let i = 4; i < this.winners.length; i += sizeOf5) {
      this.rowsOf5.push(this.winners.slice(i, i + sizeOf5));
    }
    console.log(this.rowsOf5);

    this.onResize();
    this.checkPosition();

    let halfScreen = window.innerHeight / 2;

    if (this.width >= 1000) {
      window.scrollTo(0, halfScreen);
    }
    if (halfScreen * 2 - this.windowHeight == 0) {
      window.scrollTo(0, halfScreen + 1);
    }
  }

  onResize() {
    this.width = window.innerWidth;

    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Call Winners";
    }

    this.elements_fade_in = document.querySelectorAll(".hidden-fade-in-winner");
    this.windowHeight = window.innerHeight;
  }

  checkPosition() {
    if (this.elements_fade_in.length <= 0) {
      this.elements_fade_in = document.querySelectorAll(
        ".hidden-fade-in-winner"
      );
    }
    for (let i = 0; i < this.elements_fade_in.length; i++) {
      let element = this.elements_fade_in[i];
      let positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-fade-in");
        element.classList.remove("hidden-fade-in");
      }
    }
  }

  scrollIntoView(id) {
    document.getElementById(id).scrollIntoView({ block: "center" });
  }
}
