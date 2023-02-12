import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";
import { DihComponent } from "./dih/dih.component";
import { PlatformComponent } from "./platform/platform.component";
import { CallsComponent } from "./calls/calls.component";
import { ProjectComponent } from "./project/project.component";
import { ServicesComponent } from "./services/services.component";
import { PartnersComponent } from "./partners/partners.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PressReleasesComponent } from "./press-releases/press-releases.component";
import { PressReleaseListComponent } from "./press-release-list/press-release-list.component";
import { TehcnologiesComponent } from "./tehcnologies/tehcnologies.component";
import { ContentComponent } from "./content/content.component";
import { NewsletterListComponent } from "./newsletter-list/newsletter-list.component";
import { SignupComponent } from "./signup/signup.component";
import { ExternalComponent } from "./external/external.component";
import { EventsComponent } from "./events/events.component";
import { OutputsComponent } from "./outputs/outputs.component";
import { SuccessStoriesListComponent } from "./success-stories-list/success-stories-list.component";
import { SuccessStoryComponent } from "./success-story/success-story.component";
import { GitworksComponent} from "./gitworks/gitworks.component";
import {DigitalTwinComponent} from "./digital-twin/digital-twin.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "latestnews", component: NewsComponent },
  //{ path: "events", component: EventsComponent },
  { path: "digital-innovation-hubs", component: DihComponent },
  //{ path: "platform", component: PlatformComponent },
  { path: "programme", component: CallsComponent },
  { path: "external-application", component: ExternalComponent },
  { path: "project-details", component: ProjectComponent },
  { path: "outputs", component: OutputsComponent },
  { path: "services", component: ServicesComponent },
  { path: "ecosystem", component: PartnersComponent },
  //{ path: "press-releases/:press-release", component: PressReleasesComponent },
  //{ path: "press-releases", component: PressReleaseListComponent },
  //{ path: "newsletters", component: NewsletterListComponent },
  { path: "signup", component: SignupComponent },
  { path: "content/:category/:content-piece", component: ContentComponent },

  { path: "technologies", component: TehcnologiesComponent },
  { path: "success-stories", component: SuccessStoriesListComponent },
  { path: "success-stories/:storyUrlName", component: SuccessStoryComponent },
  { path: "gitworks", component: GitworksComponent},
  { path: "digital-twin", component: DigitalTwinComponent},
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
