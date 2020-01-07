import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from './shared/event.service';
import { IEvent } from './shared/index';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: IEvent[];
  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the events property from the route and assign it to the events property on the EventListComponent class
    this.events = this.route.snapshot.data['events'];
  }
}
