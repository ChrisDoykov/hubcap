import { Component, OnInit } from "@angular/core";

export interface SME {
  id: number;
  name: string;
  logo: string;
  website: string;
}

const PARTNERS: SME[] = [
  {
    id: 1,
    name: "Cyberarch Consulting",
    logo: "https://cyberarch.eu/wp-content/uploads/2020/06/Logo_cyberarch.png",
    website: "https://cyberarch.eu",
  },
  {
    id: 2,
    name: "simevo",
    logo: "https://simevo.com/images/logo_full.png",
    website: "https://simevo.com",
  },
  {
    id: 3,
    name: "Verum Software Tools",
    logo: "https://verum.com/wp-content/uploads/2020/07/logo.png",

    website: "https://verum.com/",
  },
  {
    id: 4,
    name: "Developair Technologies",
    logo: "../../assets/res/logos/developair_logo.jpg",

    website: "https://www.developair.tech/",
  },
  {
    id: 5,
    name: "Asti Automation",
    logo:
      "https://www.astiautomation.ro/xnew/wp-content/uploads/2015/03/sigla_asti_automation.jpg",

    website: "https://www.astiautomation.ro",
  },
  {
    id: 6,
    name: "Simularge",
    logo:
      "https://www.simularge.com/wp-content/uploads/2018/04/Simularge_LOGO_3.jpg",

    website: "https://www.simularge.com",
  },
  {
    id: 7,
    name: "Waveform",
    logo: "http://www.waveform.hr/wp-content/uploads/2020/01/wf_logo-1.png",

    website: "https://www.waveform.hr",
  },
  {
    id: 7,
    name: "Xcelgo",
    logo:
      "https://xcelgo.com/wp-content/uploads/2018/02/logo_payoff_rgb-e1519296550313.png",

    website: "https://xcelgo.com/",
  },
  {
    id: 8,
    name: "Schlegel Simulation",
    logo: "../../assets/res/logos/Logo_Schlegel-Simulation.png",

    website: "http://www.schlegel-simulation.de",
  },
  {
    id: 9,
    name: "SMM INVEST",
    logo: "../../assets/res/logos/smm_inv_logo.png",

    website: "https://imobiliarproiect.ro/",
  },
  {
    id: 10,
    name: "QARTECH Innovations",
    logo: "https://qartech.io/wp-content/uploads/qartech.png",

    website: "https://qartech.io/",
  },
  {
    id: 11,
    name: "NAMS",
    logo: "https://eu-nams.com/wp-content/uploads/2019/01/nams-logo-250x63.svg",

    website: "https://www.nams-3d.com/index.php/en/home_en/",
  },
];

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

  ngOnInit(): void {
    document.title = "Call Winners | HUBCAP";
    document.getElementById("hero-title").textContent = "Call Winners";
    this.onResize();
    this.checkPosition();
  }

  onResize() {
    this.width = window.innerWidth;

    this.elements_fade_in = document.querySelectorAll(".hidden-fade-in");
    this.windowHeight = window.innerHeight;

    if (this.width > 1200) {
      this.scrollIntoView("heading");
    }
  }

  checkPosition() {
    if (this.elements_fade_in.length <= 0) {
      this.elements_fade_in = document.querySelectorAll(".hidden-fade-in");
    }
    for (let i = 0; i < this.elements_fade_in.length; i++) {
      let element = this.elements_fade_in[i];
      let positionFromTop = this.elements_fade_in[i].getBoundingClientRect()
        .top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-fade-in");
        element.classList.remove("hidden-fade-in");
      }
    }
  }

  scrollIntoView(id) {
    document.getElementById(id).scrollIntoView();
  }
  partners = PARTNERS;
}
