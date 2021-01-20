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

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { DeviceDetectorModule } from "ngx-device-detector";
import { DihComponent } from "./dih/dih.component";
import { PlatformComponent } from "./platform/platform.component";
import { CallsComponent } from "./calls/calls.component";
import { ProjectComponent } from "./project/project.component";
import { ServicesComponent } from "./services/services.component";

import { SwiperModule } from "ngx-swiper-wrapper";
import { SWIPER_CONFIG } from "ngx-swiper-wrapper";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    DeviceDetectorModule,
    MatIconModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    MatTableModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
