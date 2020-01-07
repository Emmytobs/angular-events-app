import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService, ISession, IEvent } from '../events/shared/index';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchTerm = '';
  foundSessions: ISession[];
  events: IEvent[];

  constructor(public auth: AuthService, private eventService: EventService) { }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(
      (sessions) => {
        this.foundSessions = sessions;
      }
    );
  }
  ngOnInit() {
  }

  displayEvents() {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

}
