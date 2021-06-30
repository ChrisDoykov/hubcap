import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
} from "@angular/core";
import { isSameDay, isSameMonth } from "date-fns";
import { Subject } from "rxjs";
import { CalendarEvent, CalendarView } from "angular-calendar";
import { Router } from "@angular/router";
import { events } from "./events-list";

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

  events = events;

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
