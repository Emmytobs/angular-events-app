import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsGuard implements CanActivate {

  constructor(private router: Router, private eventService: EventService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // The '+' converts it the eventId to the actual id number
    const eventId = +next.params['id'];

    const eventExists = this.eventService.getEvent(eventId);

    if (!eventExists || isNaN(eventId) || eventId <= 0) {
      this.router.navigate(['/404']);
      return false;
    } else {
      return true;
    };
  }
}
