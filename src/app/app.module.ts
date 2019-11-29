import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { appRoutes } from './routes';
import { PageNotFoundComponent } from './errors/page-not-found.component';

// import { EventsListResolverService } from './events/events-list-resolver.service';

// import { ToastrService } from './common/toastr.service';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

// Function for preventing the user from navigating from the unsaved create-event page
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('Are you sure you want to cancel? You event data will not be saved');
  } else {
    return true;
  }
}
