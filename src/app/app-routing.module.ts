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

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "news", component: NewsComponent },
  { path: "digital-innovation-hubs", component: DihComponent },
  { path: "platform", component: PlatformComponent },
  { path: "open-calls", component: CallsComponent },
  { path: "project-details", component: ProjectComponent },
  { path: "services", component: ServicesComponent },
  { path: "calls/pull", component: PullComponent },
  { path: "calls/innovate", component: InnovateComponent },
  { path: "calls/experiment", component: ExperimentComponent },
  { path: "calls/experts", component: ExpertsComponent },
  { path: "partners", component: PartnersComponent },
  { path: "press-releases/:press-release", component: PressReleasesComponent },
  { path: "press-releases", component: PressReleaseListComponent },
  { path: "newsletters", component: NewsletterListComponent },
  { path: "content/:category/:content-piece", component: ContentComponent },
  { path: "resources", component: ResourcesComponent },
  { path: "faq", component: FaqComponent },
  { path: "call-winners", component: WinnersComponent },
  { path: "technologies", component: TehcnologiesComponent },
  { path: "HUBCAP_OC1-1PULL", component: ResourcesComponent },
  { path: "HUBCAP_OC1-2PULL", component: ResourcesComponent },
  { path: "HUBCAP_OC1-1PULL/:file", component: ResourcesComponent },
  { path: "HUBCAP_OC1-2PULL/:file", component: ResourcesComponent },
  { path: "HUBCAP_OC2-1EXPERIMENT", component: ResourcesComponent },
  { path: "HUBCAP_OC2-2EXPERIMENT", component: ResourcesComponent },
  { path: "HUBCAP_OC2-1EXPERIMENT/:file", component: ResourcesComponent },
  { path: "HUBCAP_OC2-2EXPERIMENT/:file", component: ResourcesComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
