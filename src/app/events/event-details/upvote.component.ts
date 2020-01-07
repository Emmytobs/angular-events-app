import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();
  iconColor: string;

  constructor() { }

  toggleVote(session) {

  }

  onClick() {
    this.vote.emit({});
  }

  ngOnInit() {
  }

}
