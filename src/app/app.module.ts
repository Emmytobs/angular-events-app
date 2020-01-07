import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  LocationValidatorDirective
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { appRoutes } from './routes';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TOASTR_TOKEN, Toastr, CollapsibleWellComponent, JQ_TOKEN, SimpleModalComponent, ModalTriggerDirective } from './common/index';
import { DurationPipe } from './events/shared/duration.pipe';

// import { EventsListResolverService } from './events/events-list-resolver.service';

// Global third-party object dependencies
const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    DurationPipe,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    // This line tells Angular that whenever the provide parameter is seen
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

// Function for preventing the user from navigating from the create-event page without saving the event
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('Are you sure you want to cancel? You event data will not be saved');
  } else {
    return true;
  }
}
