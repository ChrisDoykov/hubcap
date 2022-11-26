import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import {SwiperOptions} from "swiper";

@Component({
  selector: "app-digital-twin-accelerator",
  templateUrl: "./digital-twin-accelerator.component.html",
  styleUrls: ["./digital-twin-accelerator.component.scss"],
})

export class DigitalTwinAcceleratorComponent implements OnInit {
  width: number;
  constructor(private router: Router) {}
  config: SwiperOptions = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    spaceBetween: 30,
    initialSlide: 0,
  };
  slides = [
    {
      imageURL: "../../assets/res/images/HUBCAP_PULL.webp",
      backupImageURL: "../../assets/res/images/HUBCAP_PULL.jpg",
      heading: "CALL #1.5 PULL",
      lines: [
        "Receive €1000 lump sum & support services",
        "Sell your assets in the HUBCAP platform",
      ],
      buttonText: "READ MORE",
    },
    {
      imageURL: "../../assets/res/images/HUBCAP_EXPERIMENT.webp",
      backupImageURL: "../../assets/res/images/HUBCAP_EXPERIMENT.jpg",
      heading: "CALL #2.2 EXPERIMENT",
      lines: [
        "European SME?",
        "Connect and collaborate with a MBD + CPS provider",
        "Experiment with up to € 75,000",
        "Free services & support from the HUBCAP ecosystem",
      ],
      buttonText: "READ MORE",
    },
    {
      imageURL: "../../assets/res/images/HUBCAP_INNOVATE.webp",
      backupImageURL: "../../assets/res/images/HUBCAP_INNOVATE.jpg",
      heading: "CALL #3 INNOVATE",
      lines: [
        "Take part in an innovative application",
        "Experiment making use of new CPS technologies",
        "Direct support and up to € 200,000 equity-free funding",
      ],
      buttonText: "READ MORE",
    },
  ];
  applyToCall(id) {
    switch (id) {
      case 0:
        // window.location.href = "/calls/pull";
        this.router.navigate(["/calls/pull"]);
        break;
      case 1:
        // window.location.href = "/calls/experiment";
        this.router.navigate(["/calls/experiment"]);
        break;
      case 2:
        // window.location.href = "/calls/innovate";
        this.router.navigate(["/calls/innovate"]);
        break;
    }
  }
  ngOnInit(): void {
    document.title = "Digital Twin Accelerator | HUBCAP";

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
