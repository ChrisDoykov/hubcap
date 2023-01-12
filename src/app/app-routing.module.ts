import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";
import { DihComponent } from "./dih/dih.component";
import { PlatformComponent } from "./platform/platform.component";
import { CallsComponent } from "./calls/calls.component";
import { ProjectComponent } from "./project/project.component";
import { ServicesComponent } from "./services/services.component";
import { PullComponent } from "./pull/pull.component";
import { InnovateComponent } from "./innovate/innovate.component";
import { ExperimentComponent } from "./experiment/experiment.component";
import { ExpertsComponent } from "./experts/experts.component";
import { PartnersComponent } from "./partners/partners.component";
import { ResourcesComponent } from "./resources/resources.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PressReleasesComponent } from "./press-releases/press-releases.component";
import { FaqComponent } from "./faq/faq.component";
import { PressReleaseListComponent } from "./press-release-list/press-release-list.component";
import { TehcnologiesComponent } from "./tehcnologies/tehcnologies.component";
import { WinnersComponent } from "./winners/winners.component";
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
  { path: "news", component: NewsComponent },
  { path: "events", component: EventsComponent },
  { path: "digital-innovation-hubs", component: DihComponent },
  // { path: "platform", component: PlatformComponent },
  { path: "open-calls", component: CallsComponent },
  { path: "external-application", component: ExternalComponent },
  { path: "project-details", component: ProjectComponent },
  { path: "outputs", component: OutputsComponent },
  { path: "services", component: ServicesComponent },
  { path: "calls/pull", component: PullComponent },
  { path: "calls/innovate", component: InnovateComponent },
  { path: "calls/experiment", component: ExperimentComponent },
  { path: "calls/experts", component: ExpertsComponent },
  { path: "partners", component: PartnersComponent },
  { path: "press-releases/:press-release", component: PressReleasesComponent },
  { path: "press-releases", component: PressReleaseListComponent },
  { path: "newsletters", component: NewsletterListComponent },
  { path: "signup", component: SignupComponent },
  { path: "content/:category/:content-piece", component: ContentComponent },
  { path: "resources", component: ResourcesComponent },
  { path: "faq", component: FaqComponent },
  { path: "call-winners", component: WinnersComponent },
  { path: "technologies", component: TehcnologiesComponent },
  { path: "HUBCAP_OC1-1PULL", component: ResourcesComponent },
  { path: "HUBCAP_OC1-2PULL", component: ResourcesComponent },
  { path: "HUBCAP_OC1-3PULL", component: ResourcesComponent },
  { path: "HUBCAP_OC1-4PULL", component: ResourcesComponent },
  // { path: "HUBCAP_OC1-5PULL", component: ResourcesComponent },
  { path: "HUBCAP_OC1-1PULL/:file", component: ResourcesComponent },
  { path: "HUBCAP_OC1-2PULL/:file", component: ResourcesComponent },
  { path: "HUBCAP_OC1-3PULL/:file", component: ResourcesComponent },
  { path: "HUBCAP_OC1-4PULL/:file", component: ResourcesComponent },
  // { path: "HUBCAP_OC1-5PULL/:file", component: ResourcesComponent },
  { path: "HUBCAP_OC2-1EXPERIMENT", component: ResourcesComponent },
  { path: "HUBCAP_OC2-2EXPERIMENT", component: ResourcesComponent },
  { path: "HUBCAP_OC3INNOVATE", component: ResourcesComponent },
  { path: "HUBCAP_OC2-1EXPERIMENT/:file", component: ResourcesComponent },
  { path: "HUBCAP_OC2-2EXPERIMENT/:file", component: ResourcesComponent },
  { path: "HUBCAP_OC3INNOVATE/:file", component: ResourcesComponent },
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
