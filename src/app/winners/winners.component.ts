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
    logo:
      "https://www.waveform.hr/wp-content/uploads/2020/09/Logo_IOT-Wallet2.png",

    website: "https://www.waveform.hr",
  },
  {
    id: 8,
    name: "Xcelgo",
    logo:
      "https://xcelgo.com/wp-content/uploads/2018/02/logo_payoff_rgb-e1519296550313.png",

    website: "https://xcelgo.com/",
  },
  {
    id: 9,
    name: "Schlegel Simulation",
    logo: "../../assets/res/logos/Logo_Schlegel-Simulation.png",

    website: "http://www.schlegel-simulation.de",
  },
  {
    id: 10,
    name: "SMM INVEST",
    logo: "../../assets/res/logos/smm_inv_logo.png",

    website: "https://imobiliarproiect.ro/",
  },
  {
    id: 11,
    name: "QARTECH Innovations",
    logo: "https://qartech.io/wp-content/uploads/qartech.png",

    website: "https://qartech.io/",
  },
  {
    id: 12,
    name: "NAMS",
    logo: "https://eu-nams.com/wp-content/uploads/2019/01/nams-logo-250x63.svg",

    website: "https://www.nams-3d.com/index.php/en/home_en/",
  },
  {
    id: 13,
    name: "CLEARSY",
    logo: "../../assets/res/logos/logo-clearsy-2020-small.png",

    website: "https://www.clearsy.com/en/",
  },
  {
    id: 14,
    name: "Agranimo",
    logo: "../../assets/res/logos/agranimo_logo.png",

    website: "https://agranimo.com/",
  },
  {
    id: 15,
    name: "HOP Ubiquitous",
    logo:
      "https://www.premiosinnobankia.com/wp-content/uploads/2020/08/logo-hopu.jpg",

    website: "https://hopu.eu/",
  },
  {
    id: 16,
    name: "Simreka",
    logo:
      "https://simreka.com/wp-content/uploads/2019/04/simrekalogo-e1558361786117.png",

    website: "https://simreka.com/",
  },
  {
    id: 17,
    name: "Beam Innovation",
    logo: "../../assets/res/logos/beam_logo.png",

    website: "https://beaminnovation.ro",
  },
  {
    id: 18,
    name: "asvin",
    logo: "../../assets/res/logos/asvin.png",

    website: "https://www.asvin.io",
  },
  {
    id: 19,
    name: "Lelier BV (Shipdetection)",
    logo: "../../assets/res/logos/Lelier_logo.png",

    website: "https://shipdetection.eu/",
  },
  {
    id: 20,
    name: "GHOST - feel it",
    logo: "../../assets/res/logos/logo_ghost.png",

    website: "https://www.ghost-feel.it",
  },
  {
    id: 21,
    name: "Brightmerge",
    logo: "../../assets/res/logos/logo_brightmerge.jpg",

    website: "https://www.brightmerge.com",
  },
  {
    id: 22,
    name: "API FORGE",
    logo: "../../assets/res/logos/logo_api_forge.png",

    website: "https://apiforge.it",
  },
  {
    id: 23,
    name: "Embneusys PC",
    logo: "../../assets/res/logos/logo_embneusys.png",

    website: "http://embneusys.com",
  },
  {
    id: 24,
    name: "D-RisQ",
    logo: "../../assets/res/logos/logo_drisq.png",

    website: "https://www.drisq.com",
  },
  {
    id: 25,
    name: "Ekkono Solutions",
    logo: "../../assets/res/logos/logo_ekkono.jpg",

    website: "https://ekkono.ai",
  },
  {
    id: 26,
    name: "Nissatech",
    logo: "../../assets/res/logos/logo_nissatech.png",

    website: "https://www.nissatech.com",
  },
  {
    id: 27,
    name: "RVmagnetics",
    logo: "../../assets/res/logos/logo_rvmagnetics.png",

    website: "https://www.rvmagnetics.com",
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
