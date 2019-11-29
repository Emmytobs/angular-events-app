import { Routes } from "@angular/router";

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventDetailsGuard,
  EventsListResolverService
} from "./events/index";

import { PageNotFoundComponent } from "./errors/page-not-found.component";

export const appRoutes: Routes = [
  {
    path: "events/new",
    canDeactivate: ["canDeactivateCreateEvent"],
    component: CreateEventComponent
  },
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventsListResolverService }
  },
  {
    path: "events/:id",
    canActivate: [EventDetailsGuard],
    component: EventDetailsComponent
  },
  { path: "404", component: PageNotFoundComponent },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  // Lazily load the the usermodule when the path starts with '/user'
  { path: "user", loadChildren: "./user/user.module#UserModule" }
];
