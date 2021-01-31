import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  width: number;
  constructor() {}

  deliverables = [
    {
      number: "D7.1",
      name: "HUBCAP Visual Identity and Templates",
      month: "M2 (Feb 2020)",
      link: "../../assets/res/files/D7.1.pdf",
    },
    {
      number: "D4.2",
      name: "Open Call Documents KIT",
      month: "M6 (June 2020)",
      link: "../../assets/res/files/D 4.2 Open Call Documentation KIT.pdf",
    },
    {
      number: "D5.1",
      name: "HUBCAP Collaboration Platform Prototype",
      month: "M6 (June 2020)",
      link:
        "../../assets/res/files/D5.1 HUBCAP Collaboration Platform Prototype_SUB.pdf",
    },
    {
      number: "D6.1",
      name: "The Initial HUBCAP Models",
      month: "M6 (June 2020)",
      link: "../../assets/res/files/HUBCAP_D6.1.pdf",
    },
    {
      number: "D6.2",
      name: "The Initial HUBCAP Model-Based Services",
      month: "M9 (Sep 2020)",
      link:
        "../../assets/res/files/D6.2 - The Initial HUBCAP Model-Based Services.pdf",
    },
  ];

  ngOnInit(): void {
    document.title = "Project Details | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Project Details";
    }

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

    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Project Details";
    }
  }
}
