import { Routes } from '@angular/router';

import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { EventDetailsGuard } from './events/event-details/event-details.guard';

export const appRoutes: Routes = [
  {path: 'events/new', canDeactivate: ['canDeactivateCreateEvent'], component: CreateEventComponent},
  {path: 'events', component: EventsListComponent},
  {path: 'events/:id', canActivate: [EventDetailsGuard], component: EventDetailsComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
];
