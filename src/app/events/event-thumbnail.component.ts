import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }

  @Input() event: any;

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return {color: 'green', 'font-weight': 'bold'};
    } else if (this.event && this.event.time === '10:00 am') {
      return {color: 'red', 'font-weight': 'bolder'};
    } else {
      return {};
    }
  }

  ngOnInit() {
  }

}
