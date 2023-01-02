import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavigationComponent } from "./navigation/navigation.component";

import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { DihComponent } from "./dih/dih.component";
import { PlatformComponent } from "./platform/platform.component";
import { CallsComponent } from "./calls/calls.component";
import { ProjectComponent } from "./project/project.component";
import { ServicesComponent } from "./services/services.component";

import { SwiperModule } from "ngx-swiper-wrapper";
import { SWIPER_CONFIG } from "ngx-swiper-wrapper";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";

import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";

import { PullComponent } from "./pull/pull.component";
import { ExperimentComponent } from "./experiment/experiment.component";
import { InnovateComponent } from "./innovate/innovate.component";
import { PartnersComponent } from "./partners/partners.component";
import { ResourcesComponent } from "./resources/resources.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PressReleasesComponent } from "./press-releases/press-releases.component";
import { FaqComponent } from "./faq/faq.component";
import { PressReleaseListComponent } from "./press-release-list/press-release-list.component";
import { TehcnologiesComponent } from "./tehcnologies/tehcnologies.component";
import { WinnersComponent } from "./winners/winners.component";
import { PressReleaseArticle1Component } from "./press-release-articles/press-release-article1/press-release-article1.component";
import { PressReleaseArticle2Component } from "./press-release-articles/press-release-article2/press-release-article2.component";
import { ContentComponent } from "./content/content.component";
import { SafeLinkPipe } from "./pipes/safe-link/safe-link.pipe";
import { Webinar1_2Component } from "./content-items/webinar1_2/webinar1_2.component";
import { NewsletterListComponent } from "./newsletter-list/newsletter-list.component";
import { PressReleaseArticle3Component } from "./press-release-articles/press-release-article3/press-release-article3.component";
import { ExpertsComponent } from "./experts/experts.component";
import { SignupComponent } from "./signup/signup.component";
import { ExternalComponent } from "./external/external.component";
import { VideoExpComponent } from "./content-items/video-exp/video-exp.component";
import { VideoGeneralComponent } from "./content-items/video-general/video-general.component";
import { PressReleaseArticle4Component } from "./press-release-articles/press-release-article4/press-release-article4.component";
import { PressReleaseArticle5Component } from "./press-release-articles/press-release-article5/press-release-article5.component";
import { EventsComponent } from "./events/events.component";
import { LinkifyPipe } from "./linkify.pipe";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { SplashScreenComponent } from "./splash-screen/splash-screen.component";
import { ImagePreloadDirective } from "./image-preload.directive";
import { PressReleaseArticle6Component } from "./press-release-articles/press-release-article6/press-release-article6.component";
import { PressReleaseArticle7Component } from "./press-release-articles/press-release-article7/press-release-article7.component";
import { PressReleaseArticle8Component } from "./press-release-articles/press-release-article8/press-release-article8.component";
import { TechnologyDialogComponent } from "./technology-dialog/technology-dialog.component";
import { OutputsComponent } from "./outputs/outputs.component";
import { DatePipe } from "./date.pipe";
import { SuccessStoriesListComponent } from "./success-stories-list/success-stories-list.component";
import { SuccessStoryComponent } from "./success-story/success-story.component";
import { SafePipe } from './safe.pipe';
import { GitworksComponent} from "./gitworks/gitworks.component";
import KeenSlider from "keen-slider";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: "horizontal",
  slidesPerView: "auto",
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    DihComponent,
    PlatformComponent,
    CallsComponent,
    ProjectComponent,
    ServicesComponent,
    PullComponent,
    ExperimentComponent,
    InnovateComponent,
    PartnersComponent,
    ResourcesComponent,
    NotFoundComponent,
    PressReleasesComponent,
    FaqComponent,
    PressReleaseListComponent,
    TehcnologiesComponent,
    WinnersComponent,
    PressReleaseArticle1Component,
    PressReleaseArticle2Component,
    ContentComponent,
    SafeLinkPipe,
    Webinar1_2Component,
    NewsletterListComponent,
    PressReleaseArticle3Component,
    ExpertsComponent,
    SignupComponent,
    ExternalComponent,
    VideoExpComponent,
    VideoGeneralComponent,
    PressReleaseArticle4Component,
    PressReleaseArticle5Component,
    EventsComponent,
    LinkifyPipe,
    SplashScreenComponent,
    ImagePreloadDirective,
    PressReleaseArticle6Component,
    PressReleaseArticle7Component,
    PressReleaseArticle8Component,
    TechnologyDialogComponent,
    OutputsComponent,
    DatePipe,
    SuccessStoriesListComponent,
    SuccessStoryComponent,
    SafePipe,
    GitworksComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatIconModule,
        SwiperModule,
        HttpClientModule,
        FormsModule,
        MatExpansionModule,
        MatTableModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        ServiceWorkerModule.register("ngsw-worker.js", {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: "registerImmediately",
        }),
        SwiperModule,
    ],
  entryComponents: [TechnologyDialogComponent],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
