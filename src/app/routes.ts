import { Routes } from '@angular/router';

import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { EventDetailsGuard } from './events/event-details/event-details.guard';
import { EventsListResolverService } from './events/events-list-resolver.service';

export const appRoutes: Routes = [
  {path: 'events/new', canDeactivate: ['canDeactivateCreateEvent'], component: CreateEventComponent},
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService}},
  {path: 'events/:id', canActivate: [EventDetailsGuard], component: EventDetailsComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  // Lazily load the the usermodule when the path starts with '/user'
  {path: 'user', loadChildren: './user/user.module#UserModule'}
];
