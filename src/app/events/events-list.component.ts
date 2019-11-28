import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { EventService } from './shared/event.service';

declare let toastr;

@Component({
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"]
})
export class EventsListComponent implements OnInit {

  events: any;
  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  handleThumbnailClick(eventName) {
    toastr.success(eventName);
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
