import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  filterBy = 'all';
  sortBy = 'votes';
  event: IEvent;
  addMode: boolean;
  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  addSession() {
    this.addMode = true;
    // this.router.navigate(["/events/session/new"])
  }

  saveNewSession(newSession: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(session => session.id));
    newSession.id = nextId + 1;
    this.event.sessions.push(newSession);
    // No need to update the event with the new session because the saveEvent method does that automatically
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

  ngOnInit() {
    // The route object property has a data property, which points to an event object. When you route to another event in the same event detail component, the event object changes to represent the event associated with that of the new route id. When this happens, the event object needs to be reassigned to the event property on the event details component.
    // For every time the event object in the route changes, if the event object in the route is not assigned to the event property in event details component, the event details component will not render the new event object in the route.
    this.route.data.forEach((data) => {
      // Use this to test the event: console.log(this.event);
      this.event = data['event'];
      // If add mode is true, set it to false
      this.addMode = false;
    });
  }
}
