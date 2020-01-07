import { Injectable } from '@angular/core';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {
  // The event lis reslver class is used for pre-loading the event data before showing the EventList component
  constructor(private eventService: EventService) { }

  resolve() {
    // The getEvents method in the event service is an observable that needs to be subscribed to. The reason it's not subscribed to below is because the getEvents method is called in a resolver
    return this.eventService.getEvents();
  }
}
