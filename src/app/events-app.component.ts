import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class EventsAppComponent {

  constructor(private auth: AuthService) {}

  ngOnInit() {
    // Every time the root component is initialized (on every page refresh of the app), a http request is made to an endpoint that returns the user's current data, which is assigned to the currentUser object in the auth service
    this.auth.checkAuthenticationStatus();
  }
}
