import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
} from "@angular/core";
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from "date-fns";
import { Subject } from "rxjs";
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from "angular-calendar";
import { Router } from "@angular/router";

const colors: any = {
  // For items related to each of the calls
  pull: {
    primary: "#fba200",
    secondary: "#ffd17d",
  },
  experiment: {
    primary: "#07a398",
    secondary: "#5cf8ed",
  },
  innovate: {
    primary: "#222749",
    secondary: "#757ebe",
  },
  // For all other news items
  green: {
    primary: "#91c222",
    secondary: "#cbe987",
  },
};

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./events.component.scss"],
})
export class EventsComponent implements OnInit {
  constructor(private router: Router) {}

  width: number;
  elements_fade_in: any;
  windowHeight: any;

  @ViewChild("modalContent", { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  refresh: Subject<any> = new Subject();

  today: Date = new Date();

  events: CalendarEvent[] = [
    {
      start: new Date("09 June 2021 13:00"),
      end: new Date("09 June 2021 23:59"),
      title: `Call #3 INNOVATE 2nd Matchmaking Event`,
      color: colors.innovate,
      meta: {
        description:
          "Join us in our 2nd live Matchmaking event for Call #3 INNOVATE on 9 June 2021! Get the opportunity to find a suitable partner for the call and pose any questions or doubts you may have!",
        location: "MS Teams",
        time: "TBC",
        link: "",
        recordingLink: "",
      },
    },
    {
      start: new Date("26 May 2021 13:00"),
      end: new Date("26 May 2021 23:59"),
      title: `Call #3 INNOVATE 2nd Q&A Webinar`,
      color: colors.innovate,
      meta: {
        description:
          "Join us in our 2nd live Q&A Webinar for Call #3 INNOVATE on 26 May 2021 and learn how to apply to the call! Get the opportunity to pose your questions and clarify your doubts with our team!",
        location: "MS Teams",
        time: "TBC",
        link: "",
        recordingLink: "",
      },
    },
    {
      start: new Date("19 May 2021 13:00"),
      end: new Date("19 May 2021 23:59"),
      title: `Call #3 INNOVATE Matchmaking Event`,
      color: colors.innovate,
      meta: {
        description:
          "Join us in our 1st live Matchmaking event for Call #3 INNOVATE on 19 May 2021! Get the opportunity to find a suitable partner for the call and pose any questions or doubts you may have!",
        location: "Zoom",
        time: "10:00 AM - 2:00 PM CEST",
        link: "https://www.linkedin.com/events/hubcapcall-3innovatefirstmatchm6797805211042799616/",
        recordingLink: "",
      },
    },
    {
      start: new Date("12 May 2021 13:00"),
      end: new Date("12 May 2021 23:59"),
      title: `Call #3 INNOVATE Q&A Webinar`,
      color: colors.innovate,
      meta: {
        description:
          "Join us in our 1st live Q&A Webinar for Call #3 INNOVATE on 12 May 2021 at 11 AM CEST and learn how to apply to the call! Get the opportunity to pose your questions and clarify your doubts with our team!",
        location: "Zoom",
        time: "11 AM CEST",
        recordingLink: "https://www.youtube.com/watch?v=SnhGeWB9CYU",
      },
    },
    {
      start: new Date("5 May 2021 13:00"),
      end: new Date("5 May 2021 23:59"),
      title: `Call #1.3 PULL Q&A Webinar`,
      color: colors.pull,
      meta: {
        description:
          "Join us in our live Q&A Webinar on 5 May, 11am CET (Brussels time) to learn more about the HUBCAP programme and how to apply to our #1.3 PULL open call!",
        location: "Zoom",
        time: "11 AM CEST",
        recordingLink: "",
      },
    },

    {
      start: new Date("3 February 2021 13:00"),
      end: new Date("3 February 2021 23:59"),
      title: `Call #2.1 EXPERIMENT Matchmaking Event`,
      color: colors.experiment,
      meta: {
        description:
          "Register for our Matchmaking event for Call #2.1 EXPERIMENT! Get an overview of HUBCAP and our currently open EXPERIMENT call! Speak with SMEs already on the platform in our matchmaking sessions!",
        location: "Zoom",
        time: "10 AM CEST",
        recordingLink: "",
      },
    },
    {
      start: new Date("13 January 2021 13:00"),
      end: new Date("13 January 2021 23:59"),
      title: `Call #2.1 EXPERIMENT Q&A Webinar`,
      color: colors.experiment,
      meta: {
        description:
          "Doubts on how to apply to the HUBCAP #2.1 Open Call? Want to know more about the HUBCAP programme? Don't miss our Call #2.1 EXPERIMENT 1st Q&A Webinar, 13 January, 11h am CET! ",
        location: "Zoom",
        time: "11 AM CEST",
        recordingLink: "https://www.youtube.com/watch?v=ADX-p_LGc4E",
      },
    },
    {
      start: new Date("28 October 2020 13:00"),
      end: new Date("28 October 2020 23:59"),
      title: `Call #1.2 PULL Q&A Webinar`,
      color: colors.pull,
      meta: {
        description:
          "Join us in our live Q&A Webinar on 28 October, 11h30am CET (Brussels time) to learn more about the HUBCAP programme and how to apply!",
        location: "Zoom",
        time: "11:30 AM CEST",
        recordingLink: "https://www.youtube.com/watch?v=TfFn9zrcjCs",
      },
    },
  ];

  futureEvents: CalendarEvent[] = [
    ...this.events.filter(
      (event) => event.start.getTime() >= this.today.getTime()
    ),
  ];

  pastEvents: CalendarEvent[] = [
    ...this.events.filter(
      (event) => event.start.getTime() < this.today.getTime()
    ),
  ];

  activeDayIsOpen: boolean =
    this.futureEvents.filter(
      (event) => event.start.getDate() === this.today.getDate()
    ).length > 0
      ? true
      : false;

  ngOnInit(): void {
    document.title = "Events | HUBCAP";
    this.onResize();
    this.checkPosition();
  }

  onResize() {
    this.width = window.innerWidth;

    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Events";
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
      let positionFromTop =
        this.elements_fade_in[i].getBoundingClientRect().top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-fade-in");
        element.classList.remove("hidden-fade-in");
      }
    }
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    // window.location.href = event.meta.url;
    document
      .getElementById(event.title.toLowerCase())
      .scrollIntoView({ block: "center" });
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
