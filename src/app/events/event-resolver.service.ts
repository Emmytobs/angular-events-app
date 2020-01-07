import { Injectable } from '@angular/core';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve(route: ActivatedRouteSnapshot) {
    // Again, the getEvents observable is automatically subscribed to in a resolver method
    return this.eventService.getEvent(+route.params['id']);
  }
}
