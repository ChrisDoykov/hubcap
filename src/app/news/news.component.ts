import { Component, OnInit, SecurityContext } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  articles = [
    {
      title: "HUBCAP Call For Experts",
      summary:
        "HUBCAP is looking for experts in the MBD tools and CPS domains with experience in evaluating EU funded projects. Evaluators will be reimbursed for their time and effort on the basis of the number of proposals evaluated!",
      date: "2021.01.15",
      type: "OPEN CALL",
      caption: "",
      urlname: "Apply now",
      url: "https://www.f6s.com/1callofexpertsexpressionofinterest/apply",
      modalTarget: "cfe",
    },
    {
      title: "Call #2.1 EXPERIMENT Q&A Webinar on 13 January 2021",
      summary:
        "Call #2.1 EXPERIMENT is now open for applications! Want to know more about HUBCAP and how to apply to the EXPERIMENT open calls? Join us in our 1st Q&A webinar on 13 January, 11h am CET (Brussels Time)!",
      date: "2020.12.22",
      type: "WEBINAR",
      caption: "",
      urlname: "Register for the webinar",
      url: "https://www.f6s.com/1stqawebinarforhubcapcall2.1experiment",
      modalTarget: "2.1webinar1",
      thumbnail:
        "../../assets/res/files/HUBCAP_OC2-1EXPERIMENT/Q&AWebinar_1.png",
      thumbnailAlt: "Call #2.1 EXPERIMENT Q&A Webinar on 13 January 2021",
    },
    {
      title: "AgroIntelli CEO interview",
      summary:
        "Check out what the CEO of AgroIntelli, Ole Green, has to say about the use of MBD when it comes to CPS solutions.",
      date: "2020.12.17",
      type: "INTERVIEW",
      caption: "",
      urlname: "Watch interview",
      url:
        "https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A6745286426075676674/?_l=en_US",
    },
    {
      title: "Q&A Webinar Recording",
      summary:
        "Don't worry if you missed it! Rewatch our webinar to learn about our Call #1.2 PULL and how to apply, closing 30 November 2020 at 17h00 (Brussels Time) CEST.",
      date: "2020.11.05",
      type: "RECORDING",
      caption: "",
      urlname: "Watch recording",
      url: "/content/open-calls/1.2-webinar",
      videoURL: "https://www.youtube.com/embed/qsokDLHRORc",
    },
    {
      title: "Q&A Webinar on 28 October",
      summary:
        "Call #1.2 PULL is now open to applications! Join us on our live Q&A Webinar on 28 October, 11h30am CEST (Brussels Time) to learn how to apply to HUBCAP Call #1.2 PULL!",
      date: "2020.10.16",
      type: "WEBINAR",
      caption: "",
      urlname: "Register for the webinar",
      url: "https://www.f6s.com/call1.2pull1stqawebinar",
      modalTarget: "1.2webinar",
      thumbnail: "../../assets/res/images/calll1.2webinar.PNG",
      thumbnailAlt: "HUBCAP Call #1.2 Q&A Webinar",
    },
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
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Latest News";
    }
    this.onResize();
    this.checkPosition();
  }

  width: number;
  elements_fade_in: any;
  windowHeight: any;

  onResize() {
    this.width = window.innerWidth;

    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Latest News";
    }

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
