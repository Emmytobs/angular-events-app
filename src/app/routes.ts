import { Routes } from '@angular/router';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventResolverService,
  EventsListResolverService,
  CreateSessionComponent
} from './events/index';

import { PageNotFoundComponent } from './errors/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    canDeactivate: ['canDeactivateCreateEvent'],
    component: CreateEventComponent
  },
  {
    path: 'events',
    component: EventsListComponent,
    // The events list resolver class is used for pre-loading the event data before showing the EventList component.
    /* The below line of code tells Angular that when the route is at "/events", it should run the events list resolver, which gets the events data and assigns the data to a property named 'events' in the route. Only then will Angular run the component to which the resolver is attached */
    resolve: { events: EventsListResolverService }
  },
  {
    path: 'events/:id',
    resolve: {event: EventResolverService},
    component: EventDetailsComponent
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  // Lazily load the the usermodule when the path starts with '/user'
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
