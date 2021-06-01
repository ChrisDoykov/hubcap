import { HttpClient } from "@angular/common/http";
import { Component, OnInit, SecurityContext } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  localArticles = [
    {
      title: "Call #3 INNOVATE 1st Matchmaking Event",
      summary:
        "Looking forward to our first matchmaking event next week for our INNOVATE call offering 200k€ to consortia of 2-3 SMEs to innovate with Model-Based Design! Come along to pitch your SME as a provider or potential user of MBD software and meet prospective partners!",
      date: new Date("2021-05-11"),
      displayDate: "2021.05.11",
      type: "WEBINAR",
      caption: "",
      buttonText: "Register for the webinar",
      url: "https://www.linkedin.com/events/hubcapcall-3innovatefirstmatchm6797805211042799616/",
      modalTarget: "1stMMINNO",
      thumbnail:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/HUBCAP_INNOVATE_1st_MM_thumbnail.png",
      thumbnailAlt: "Call #3 INNOVATE 1st Matchmaking Event",
    },
    {
      title: "HUBCAP Events Page",
      summary:
        'Having doubts or questions and wondering when our next Q&A or Matchmaking session is? Check out our new "Events" page under the "News" menu item or by visting www.hubcap.eu/events to keep up to date with the HUBCAP event schedule!',
      date: new Date("2021-05-10"),
      displayDate: "2021.05.10",
      type: "EVENTS",
      caption: "",
      buttonText: "Visit Events Page",
      url: "/events",
      modalTarget: "eventsPageLaunch",
      thumbnail: "",
      thumbnailAlt: "",
    },
    {
      title: "HUBCAP Open Call #3 INNOVATE Q&A Webinar",
      summary:
        "Join us in our 1st live Q&A Webinar for Call #3 INNOVATE on 12 May 2021 at 11 AM CEST and learn how to apply to the call! Get the opportunity to pose your questions and clarify your doubts with our team!",
      date: new Date("2021-05-01"),
      displayDate: "2021.05.01",
      type: "WEBINAR",
      caption: "",
      buttonText: "Register for the webinar",
      url: "https://www.eventbrite.com/e/hubcap-call-3-innovate-1st-qa-webinar-tickets-151634736579",
      modalTarget: "call3firstqanda",
      thumbnail:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/call3-first-webinar.jfif",
      thumbnailAlt: "HUBCAP Open Call #3 INNOVATE First Q&A Webinar",
    },
    {
      title: "HUBCAP Open Call #3 INNOVATE",
      summary:
        "HUBCAP's most ambitious open call INNOVATE is now officially underway! Check out our press release to learn more about the call and the opportunities it provides! Call #3 INNOVATE will remain open until 30 June 2021 at 17h CET (Brussels Time).",
      date: new Date("2021-04-01"),
      displayDate: "2021.04.01",
      type: "OPEN CALLS",
      caption: "",
      buttonText: "See press release",
      url: "/press-releases/call3",
      modalTarget: "call3",
      thumbnail:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/HUBCAP_SOCIAL_3_INNOVATE_1.jpg",
      thumbnailAlt: "HUBCAP Open Call #3 INNOVATE",
    },
    {
      title: "HUBCAP Open Call #1.3 PULL",
      summary:
        "The third iteration of our PULL open call is now accepting applications! The call will remain open until 2 June 2021 at 17h CET (Brussels Time).",
      date: new Date("2021-04-01"),
      displayDate: "2021.04.01",
      type: "OPEN CALLS",
      caption: "",
      buttonText: "See press release",
      url: "/press-releases/call1-3",
      modalTarget: "call1.3",
      thumbnail:
        "../../assets/res/files/HUBCAP_OC1-3PULL/HUBCAP_SOCIAL_1-3_PULL_1.jpg",
      thumbnailAlt: "HUBCAP Open Call #1.3 PULL",
    },
    {
      title: "HUBCAP Matchmaking Event",
      summary:
        "Thank you to everyone who took part in our Matchmaking event! We hope you enjoyed the presentations, discussions from our SMEs, and breakout sessions! We look forward to seeing you at our next event!",
      date: new Date("2021-02-05"),
      displayDate: "2021.02.05",
      type: "WEBINAR",
      caption: "",
      buttonText: "",
      url: "",
      modalTarget: "matchmaking2.1",
      thumbnail: "../../assets/res/images/matchmaking2.1.JPG",
      thumbnailAlt:
        "Call #2.1 EXPERIMENT Matchmaking Event on 03 February 2021",
    },
    {
      title: "HUBCAP Call For Experts",
      summary:
        "HUBCAP is looking for experts in the MBD tools and CPS domains with experience in evaluating EU funded projects. Evaluators will be reimbursed for their time and effort on the basis of the number of proposals evaluated!",
      date: new Date("2021-01-15"),
      displayDate: "2021.01.15",
      type: "OPEN CALLS",
      caption: "",
      buttonText: "Apply now",
      url: "https://www.f6s.com/1callofexpertsexpressionofinterest/apply",
      modalTarget: "cfe",
    },
    {
      title: "Call #2.1 EXPERIMENT Q&A Webinar on 13 January 2021",
      summary:
        "Call #2.1 EXPERIMENT is now open for applications! Want to know more about HUBCAP and how to apply to the EXPERIMENT open calls? Join us in our 1st Q&A webinar on 13 January, 11h am CET (Brussels Time)!",
      date: new Date("2020-12-22"),
      displayDate: "2020.12.22",
      type: "WEBINAR",
      caption: "",
      buttonText: "Register for the webinar",
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
      date: new Date("2020-12-17"),
      displayDate: "2020.12.17",
      type: "INTERVIEW",
      caption: "",
      buttonText: "Watch interview",
      url: "https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A6745286426075676674/?_l=en_US",
    },
    {
      title: "Q&A Webinar Recording",
      summary:
        "Don't worry if you missed it! Rewatch our webinar to learn about our Call #1.2 PULL and how to apply, closing 30 November 2020 at 17h00 (Brussels Time) CEST.",
      date: new Date("2020-11-05"),
      displayDate: "2020.11.05",
      type: "RECORDING",
      caption: "",
      buttonText: "Watch recording",
      url: "/content/open-calls/1.2-webinar",
      videoURL: "https://www.youtube.com/embed/qsokDLHRORc",
    },
    {
      title: "Q&A Webinar on 28 October",
      summary:
        "Call #1.2 PULL is now open to applications! Join us on our live Q&A Webinar on 28 October, 11h30am CEST (Brussels Time) to learn how to apply to HUBCAP Call #1.2 PULL!",
      date: new Date("2020-10-16"),
      displayDate: "2020.10.16",
      type: "WEBINAR",
      caption: "",
      buttonText: "Register for the webinar",
      url: "https://www.f6s.com/call1.2pull1stqawebinar",
      modalTarget: "1.2webinar",
      thumbnail: "../../assets/res/images/calll1.2webinar.PNG",
      thumbnailAlt: "HUBCAP Call #1.2 Q&A Webinar",
    },
    {
      title: "SAE session at HiPEAC Computing Systems Week",
      summary:
        "Join us in the Smart Anything Everywhere session at this year's virtual HiPEAC Computing Systems Week on 15/10/20 from 14-16hr, where HUBCAP will be presented by the project coordinator Peter Gorm Larsen!",
      date: new Date("2020-10-13"),
      displayDate: "2020.10.13",
      type: "VIRTUAL SESSION",
      caption: "",
      buttonText: "Register for the session",
      url: "https://www.hipeac.net/csw/2020/autumn-virtual/#/registration/",
      modalTarget: "sae-session",
      thumbnailAlt: "",
    },
    {
      title: "HUBCAP Open Call #1.2 PULL",
      summary:
        "Call #1.2 PULL will be open for applications from 1 October 2020 until 30 November 2020 at 17h00 (Brussels Time) CEST.",
      date: new Date("2020-09-15"),
      displayDate: "2020.09.15",
      type: "OPEN CALLS",
      caption: "",
      buttonText: "See press release",
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
      date: new Date("2020-05-28"),
      displayDate: "2020.05.28",
      type: "WEBINAR",
      caption: "",
      buttonText: "Watch replay",
      url: "https://www.youtube.com/playlist?list=PLgMGIq5cGVBNkUARmDRsqKCcP-9HPw6wa",
      modalTarget: "joint-webinar",
      thumbnail: "../../assets/res/images/webinar_june_2020.PNG",
      thumbnailAlt: "Joint webinar",
    },
    {
      title: "HUBCAP First Open Calls",
      summary:
        "Call #1.1 will open at the end of April and close at the end of June.",
      date: new Date("2020-01-23"),
      displayDate: "2020.01.23",
      type: "OPEN CALLS",
      caption: "",
      buttonText: "See press release",
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
      date: new Date("2019-09-23"),
      displayDate: "2019.09.23",
      type: "MEETING",
      caption: "",
      buttonText: "More details",
      url: "https://wiki.eng.au.dk/login.action?os_destination=%2Fpages%2Fviewpage.action%3FspaceKey%3DIN%26title%3DKICK-OFF%2Bmeeting&permissionViolation=true",
      modalTarget: "kick-off-meeting",
      thumbnail: "../../assets/res/images/hubcap-team.jpg",
      thumbnailAlt: "The HUBCAP team. Photo by AU Foto, Lars Kruse.",
    },
  ];

  articles = [];

  loading = false;

  scrolledToLast = false;

  allTweetsLoaded = false;

  untilId = "latest";

  currentLastDate: Date;

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

  loadMoreTweets() {
    if (!this.allTweetsLoaded) {
      this.loading = true;
      this.http
        .post<{ newsItems: any }>(`/twitter/${this.untilId}`, {})
        .subscribe(
          (response) => {
            if (response.newsItems.length <= 0) {
              this.loading = false;
              return (this.allTweetsLoaded = true);
            }
            if (
              response.newsItems[response.newsItems.length - 1].id ===
              "1251148196299993093"
            ) {
              this.allTweetsLoaded = true;
            }
            this.loading = false;
            response.newsItems = response.newsItems.map((item) => ({
              ...item,
              date: new Date(item.date),
            }));
            this.untilId = response.newsItems[response.newsItems.length - 1].id;
            this.currentLastDate =
              response.newsItems[response.newsItems.length - 1].date;
            if (this.currentLastDate) {
              let articlesToAdd = this.localArticles.filter(
                (article) =>
                  article.date.getTime() >= this.currentLastDate.getTime()
              );
              this.articles = [
                ...this.articles,
                ...articlesToAdd,
                ...response.newsItems,
              ];

              this.localArticles = this.localArticles.filter(
                (article) => !this.articles.includes(article)
              );
            } else {
              this.articles = [...this.localArticles, ...response.newsItems];
            }

            this.articles = this.articles.sort(
              (a: any, b: any) => b.date - a.date
            );
            this.scrolledToLast = false;
          },
          (error) => {
            this.loading = false;
            this.articles = [...this.localArticles];
            console.log(error);
          }
        );
      this.onResize();
      this.checkPosition();
    }
  }

  ngOnInit() {
    document.title = "Latest News | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Latest News";
    }
    this.loading = true;
    this.http
      .post<{ newsItems: any }>(`/twitter/${this.untilId}`, {})
      .subscribe(
        (response) => {
          if (response.newsItems.length <= 0) {
            this.allTweetsLoaded = true;
            this.loading = false;
          } else {
            if (
              response.newsItems[response.newsItems.length - 1].id ===
              "1251148196299993093"
            ) {
              this.allTweetsLoaded = true;
            }
            this.loading = false;
            response.newsItems = response.newsItems.map((item) => ({
              ...item,
              date: new Date(item.date),
            }));
            this.untilId = response.newsItems[response.newsItems.length - 1].id;
            this.currentLastDate =
              response.newsItems[response.newsItems.length - 1].date;

            if (this.currentLastDate) {
              let articlesToAdd = this.localArticles.filter(
                (article) =>
                  article.date.getTime() >= this.currentLastDate.getTime()
              );

              this.articles = [
                ...this.articles,
                ...articlesToAdd,
                ...response.newsItems,
              ];

              this.localArticles = this.localArticles.filter(
                (article) => !this.articles.includes(article)
              );
            } else {
              this.articles = [...this.localArticles, ...response.newsItems];
            }
            this.articles = this.articles.sort(
              (a: any, b: any) => b.date - a.date
            );
          }
        },
        (error) => {
          this.loading = false;
          this.articles = [...this.localArticles];
          console.log(error);
        }
      );

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

    this.elements_fade_in = document.querySelectorAll(".hidden-fade-in-news");
    this.windowHeight = window.innerHeight;
  }

  checkPosition() {
    if (this.elements_fade_in.length <= 0) {
      this.elements_fade_in = document.querySelectorAll(".hidden-fade-in-news");
    }
    for (let i = 0; i < this.elements_fade_in.length; i++) {
      let element = this.elements_fade_in[i];
      let positionFromTop =
        this.elements_fade_in[i].getBoundingClientRect().top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-fade-in");
        element.classList.remove("hidden-fade-in");
      }
    }
  }
}
