import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  width: number;
  constructor() {}

  ngOnInit(): void {
    document.title = "Project Details | HUBCAP";

    this.onResize();

    const $modalButtons = Array.prototype.slice.call(
      document.querySelectorAll(".modal-button"),
      0
    );
    const $closeModalButtons = Array.prototype.slice.call(
      document.querySelectorAll(".modal-close"),
      0
    );
    const $modalBackgrounds = Array.prototype.slice.call(
      document.querySelectorAll(".modal-background"),
      0
    );

    if ($modalButtons.length > 0) {
      $modalButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const target = button.dataset.target;
          const $target = document.getElementById(target);

          $target.classList.toggle("is-active");
        });
        $closeModalButtons.forEach((button) => {
          button.addEventListener("click", () => {
            const $targets = document.querySelectorAll(".modal");
            $targets.forEach((target) => {
              target.classList.remove("is-active");
            });
          });
        });
        $modalBackgrounds.forEach((background) => {
          background.addEventListener("click", () => {
            const $targets = document.querySelectorAll(".modal");
            $targets.forEach((target) => {
              target.classList.remove("is-active");
            });
          });
        });
      });
    }
  }

  onResize() {
    this.width = window.innerWidth;
  }
}
