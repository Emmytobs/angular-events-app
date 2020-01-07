import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styles: []
})
export class SessionListComponent implements OnChanges {

  noSessions;
  visibleSessions: ISession[];
  @Input() sessions: ISession[];
  @Input() sortBy: string;
  @Input() filterBy: string;
  @Input() eventId: number;



  constructor(
    public auth: AuthService,
    private voterService: VoterService
  ) { }

  filterSessions(filter) {
    if (filter === 'all') {
      // The slice method returns an array of sessions, but keeps the original sessions array as-is
      this.visibleSessions = this.sessions.slice(0);
    } else {
      // The filter method returns an array of sessions, whose level matches the specified level in the filter parameter
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });

      // Own modification
      if (!this.visibleSessions.length) {
        this.noSessions = true;
        console.log(this.noSessions);
       } else if (this.visibleSessions.length) {
         this.noSessions = false;
         console.log(this.noSessions);
       }
       // Own modification

    }
  }

  // Own modification
  showNoSessions() {
    console.log('true');
  }
  // Own modification

  /*
  The ngOnChanges hook runs even before any of the properties are set;
  that is why it is important to filter the sessions only after the sessions property on the object has been set
  */
  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAscending) : this.visibleSessions.sort(sortByVotesDescending);
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
    }
    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDescending);
    }
  }

  userHasVoted(session) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }

}


function sortByNameAscending(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDescending(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
