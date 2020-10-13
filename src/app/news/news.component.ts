import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
  constructor() {}

  articles = [
    {
      title: "SAE session at HiPEAC Computing Systems Week",
      summary:
        "Join us in the Smart Anything Everywhere session at this year's virtual HiPEAC Computing Systems Week on 15/10/20 from 14-16hr, where HUBCAP will be presented by the project coordinator Peter Gorm Larsen!",
      date: "2020.10.13",
      type: "VIRTUAL SESSION",
      caption: "",
      urlname: "Register for the session",
      url: "https://www.hipeac.net/csw/2020/autumn-virtual/#/registration/",
      modalTarget: "sae-session",
      thumbnailAlt: "",
    },
    {
      title: "HUBCAP Open Call #1.2 PULL",
      summary:
        "Call #1.2 PULL will be open for applications from 1 October 2020 until 30 November 2020 at 17h00 (Brussels Time) CEST.",
      date: "2020.09.15",
      type: "OPEN CALLS",
      caption: "",
      urlname: "See press release",
      url: "/press-releases/call1-2",
      modalTarget: "call-1-2",
      thumbnail:
        "../../assets/res/files/HUBCAP_OC1-2PULL/HUBCAP_TWITER_12_01.png",
      thumbnailAlt: "HUBCAP social Call #1.2",
    },
    {
      title: "Model-Based Design for CPS webinar on June 29th!",
      summary:
        "On the 29th June there will be a joint webinar with the Centre for Digital Twins and the INTO-CPS Association on Model-Based Design for Cyber-Physical Systems.",
      date: "2020.05.28",
      type: "WEBINAR",
      caption: "",
      urlname: "Watch replay",
      url:
        "https://www.youtube.com/playlist?list=PLgMGIq5cGVBNkUARmDRsqKCcP-9HPw6wa",
      modalTarget: "joint-webinar",
      thumbnail: "../../assets/res/images/webinar_june_2020.PNG",
      thumbnailAlt: "Joint webinar",
    },
    {
      title: "HUBCAP First Open Calls",
      summary:
        "Call #1.1 will open at the end of April and close at the end of June.",
      date: "2020.01.23",
      type: "OPEN CALLS",
      caption: "",
      urlname: "See press release",
      url: "/press-releases/call1-1",
      modalTarget: "first-meetings",
      thumbnail:
        "../../assets/res/files/HUBCAP_OC1-1PULL/HUBCAP_Call1-1Pull_Social02.png",
      thumbnailAlt: "HUBCAP social",
    },
    {
      title: "HUBCAP Kick-Off meeting",
      summary:
        "The kick-off meeting of the HUBCAP project was held between 21- 23 January 2020 in Aarhus, Denmark.",
      date: "2019.09.23",
      type: "MEETING",
      caption: "",
      urlname: "More details",
      url:
        "https://wiki.eng.au.dk/login.action?os_destination=%2Fpages%2Fviewpage.action%3FspaceKey%3DIN%26title%3DKICK-OFF%2Bmeeting&permissionViolation=true",
      modalTarget: "kick-off-meeting",
      thumbnail: "../../assets/res/images/hubcap-team.jpg",
      thumbnailAlt: "The HUBCAP team. Photo by AU Foto, Lars Kruse.",
    },
  ];

  openModal(article) {
    const target = article.modalTarget;
    const $target = document.getElementById(target);

    $target.classList.toggle("is-active");
  }
  closeModal(article) {
    const target = article.modalTarget;
    const $target = document.getElementById(target);

    $target.classList.remove("is-active");
  }

  ngOnInit() {
    document.title = "Latest News | HUBCAP";
    document.getElementById("hero-title").textContent = "Latest News";
    this.onResize();
    this.checkPosition();
  }

  width: number;
  elements_fade_in: any;
  windowHeight: any;

  onResize() {
    this.width = window.innerWidth;

    this.elements_fade_in = document.querySelectorAll(".hidden-fade-in");
    this.windowHeight = window.innerHeight;
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
}
