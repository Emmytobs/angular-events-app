import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty = true;
  newEvent = {
    name: 'Angular Mindset (ng)^2',
    date: new Date('12/12/2019').getDate(),
    time: '2:30 pm',
    price: '$40',
    address: 'Terragon Group',
    city: 'Lagos',
    country: 'Nigeria',
    onlineUrl: 'ng-ng.com',
    imageUrl: 'https://imgur.com/logo.png'
  };

  constructor(private router: Router, private eventService: EventService) { }


  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }

  ngOnInit() {
  }

}
