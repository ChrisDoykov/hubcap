import {
  Component,
  OnInit,
  Injectable,
  OnDestroy,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";
import { SwiperOptions } from "swiper";
import { CountUp } from "countup.js";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [DeviceDetectorService],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private deviceService: DeviceDetectorService) {}

  counterSME = 250;
  experiments = 30;
  innovations = 20;
  millions = 3.2;

  mobile = this.deviceService.isMobile();
  desktop = this.deviceService.isDesktop();
  tablet = this.deviceService.isTablet();

  browser = this.deviceService.browser;

  browserList = ["Safari", "IE"];

  webp = true;

  animationHasRan: boolean = false;
  width: number;
  elements_fade_in: any;
  elements_slide_in_left: any;
  elements_slide_in_right: any;
  windowHeight: any;

  smeOptions = {
    suffix: "+",
    duration: 5,
  };
  millOptions = {
    decimalPlaces: 1,
    duration: 7,
  };

  options = {
    duration: 7,
  };

  counted: boolean = false;

  slides = [
    {
      imageURL: "../../assets/res/images/HUBCAP_PULL.jpg",
      heading: "CALL #1.2 PULL",
      lines: [
        "Receive €1000 lump sum & support services",
        "Sell your assets in the HUBCAP platform",
      ],
      buttonText: "READ MORE",
    },
    {
      imageURL: "../../assets/res/images/HUBCAP_EXPERIMENT.jpg",
      heading: "CALL #2.1 EXPERIMENT",
      lines: [
        "European SME?",
        "Connect and collaborate with a MBD + CPS provider",
        "Experiment with up to € 75,000",
        "Free services & support from the HUBCAP ecosystem",
      ],
      buttonText: "READ MORE",
    },
    {
      imageURL: "../../assets/res/images/HUBCUP_INNOVATE.jpg",
      heading: "CALL #3.1 INNOVATE",
      lines: [
        "Take part in an innovative application",
        "Experiment making use of new CPS technologies",
        "Direct support and up to € 200,000 equity-free funding",
      ],
      buttonText: "READ MORE",
    },
  ];

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
  };

  applyToCall(id) {
    switch (id) {
      case 0:
        window.location.href = "/calls/pull";
        break;
      case 1:
        window.location.href = "/calls/experiment";
        break;
      case 2:
        window.location.href = "/calls/innovate";
        break;
    }
  }

  ngOnDestroy(): void {
    document.getElementById("hero-title").parentElement.style.width = "unset";
  }

  @ViewChild("blue", { static: true }) blueText: ElementRef;
  @ViewChild("green", { static: true }) greenText: ElementRef;
  @ViewChild("red", { static: true }) redText: ElementRef;
  @ViewChild("counters", { static: true }) counters: ElementRef;

  ngOnInit() {
    document.title = "HUBCAP";
    if (this.desktop) {
      document.getElementById("hero-title").textContent =
        "Join us in the Cyber-Physical Systems revolution!";
    } else {
      document.getElementById("hero-title").textContent = "Welcome to HUBCAP!";
    }

    // document.getElementById("hero-title").parentElement.style.width = "70%";

    this.webp = this.browserList.includes(this.browser) ? false : true;

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
    this.onResize();
    this.checkPosition();
  }

  onResize() {
    this.width = window.innerWidth;

    this.elements_fade_in = document.querySelectorAll(".hidden-fade-in");
    this.elements_slide_in_left = document.querySelectorAll(
      ".hidden-slide-in-left"
    );
    this.elements_slide_in_right = document.querySelectorAll(
      ".hidden-slide-in-right"
    );
    this.windowHeight = window.innerHeight;
  }

  checkPosition() {
    let positionFromTop = this.blueText.nativeElement.getBoundingClientRect()
      .top;
    let positionCounterFromTop = this.counters.nativeElement.getBoundingClientRect()
      .top;

    if (positionFromTop - this.windowHeight <= 0 && !this.animationHasRan) {
      this.animationHasRan = true;

      this.blueText.nativeElement.classList.add("hovered");
      setTimeout(() => {
        this.blueText.nativeElement.classList.remove("hovered");
        this.greenText.nativeElement.classList.add("hovered");
        setTimeout(() => {
          this.greenText.nativeElement.classList.remove("hovered");
          this.redText.nativeElement.classList.add("hovered");
          setTimeout(() => {
            this.redText.nativeElement.classList.remove("hovered");
          }, 1000);
        }, 1000);
      }, 1000);
    }

    if (positionCounterFromTop - this.windowHeight <= 0 && !this.counted) {
      let smeCount = new CountUp(
        "smeCounter",
        this.counterSME,
        this.smeOptions
      );
      smeCount.start();
      let expCount = new CountUp("expCounter", this.experiments, this.options);
      expCount.start();
      let innCount = new CountUp("innCounter", this.innovations, this.options);
      innCount.start();
      let millCount = new CountUp(
        "millCounter",
        this.millions,
        this.millOptions
      );
      millCount.start();
      this.counted = true;
    }
  }
}