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
];

@Component({
  selector: "app-winners",
  templateUrl: "./winners.component.html",
  styleUrls: ["./winners.component.scss"],
})
export class WinnersComponent implements OnInit {
  constructor() {}

  bigTable = false;

  ngOnInit(): void {
    document.title = "Call Winners | HUBCAP";
    document.getElementById("hero-title").textContent = "Call Winners";
  }
  partners = PARTNERS;

  onResize(event) {
    if (event.target.innerWidth > 2200) {
      this.bigTable = true;
    } else {
      this.bigTable = false;
    }
  }
}
