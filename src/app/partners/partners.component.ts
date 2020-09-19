import { Component, OnInit } from "@angular/core";

export interface Partner {
  id: number;
  name: string;
  logo: string;
  title: string;
  website: string;
}

const PARTNERS: Partner[] = [
  {
    id: 1,
    name: "Aarhus University",
    logo: "../../assets/res/logos/aarhus.png",
    title: "Coordinator",
    website: "https://digit.au.dk/",
  },
  {
    id: 2,
    name: "Newcastle University",
    logo: "../../assets/res/logos/ncl.png",
    title: "",
    website: "https://www.ncl.ac.uk/computing/",
  },
  {
    id: 3,
    name: "Fortiss",
    logo: "../../assets/res/logos/Logo_fortiss_RGB_white-blue.png",
    title: "",
    website: "https://www.fortiss.org/en/",
  },
  {
    id: 4,
    name: "Virtual Vehicle",
    logo: "../../assets/res/logos/ViF_logo08_02_RGB.png",
    title: "",
    website: "https://www.v2c2.at/",
  },
  {
    id: 5,
    name: "Fondazione Bruno Kessler",
    logo: "../../assets/res/logos/FBK_BASE.png",
    title: "",
    website: "https://www.fbk.eu/en/",
  },
  {
    id: 6,
    name: "KTH Royal Institute of Technology",
    logo: "../../assets/res/logos/KTH_Logotyp_RGB_2013.png",
    title: "",
    website: "https://www.kth.se/en",
  },
  {
    id: 7,
    name: '"Lucian Blaga" University of Sibiu',
    logo: "../../assets/res/logos/siglaULBSalbastru.png",
    title: "",
    website: "https://www.ulbsibiu.ro/en/",
  },
  {
    id: 8,
    name: "Engineering Group",
    logo: "../../assets/res/logos/engineering_logo_large_transparent.png",
    title: "",
    website: "https://www.eng.it/en/",
  },
  {
    id: 9,
    name: "Research Institutes of Sweden AB",
    logo: "../../assets/res/logos/RISE-logo.png",
    title: "",
    website: "https://www.ri.se/en",
  },
  {
    id: 10,
    name: "F6S",
    logo: "../../assets/res/logos/F6S Logo.png",
    title: "",
    website: "https://www.f6s.com/f6s/about",
  },
  {
    id: 11,
    name: "Politecnico di Milano",
    logo: "../../assets/res/logos/logoPolimi.jpg",
    title: "",
    website: "https://www.polimi.it/",
  },
  {
    id: 12,
    name: "Unparallel Innovation",
    logo: "../../assets/res/logos/unparallel.png",
    title: "",
    website: "https://www.unparallel.pt/",
  },
  {
    id: 13,
    name: "Control Lab",
    logo: "../../assets/res/logos/Logo CLP.png",
    title: "",
    website: "https://www.controllab.nl/",
  },
  {
    id: 14,
    name: "Beia Consult International",
    logo: "../../assets/res/logos/sigla_beia_300dpi.png",
    title: "",
    website: "http://www.beiaro.eu/",
  },
  {
    id: 15,
    name: "Verified Systems International",
    logo: "../../assets/res/logos/verified-logo.png",
    title: "",
    website: "https://www.verified.de/",
  },
  {
    id: 16,
    name: "Validas",
    logo: "../../assets/res/logos/validas300.png",
    title: "",
    website: "http://www.validas.de/en/",
  },
  {
    id: 17,
    name: "Technology Transfer System S.r.l",
    logo: "../../assets/res/logos/tts-logo.png",
    title: "",
    website: "http://www.ttsnetwork.com/en/",
  },
];

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"],
})
export class PartnersComponent implements OnInit {
  constructor() {}

  bigTable = false;

  ngOnInit(): void {
    document.title = "Our Partners | HUBCAP";
    document.getElementById("hero-title").textContent = "Our Partners";
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