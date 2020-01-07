import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';

describe('SessionListComponent', () => {
  let component: SessionListComponent, mockAuthService, mockVoterService;
  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      component.sessions =
      <ISession[]>[
          {name: 'session 1', level: 'intermediate'},
          {name: 'session 2', level: 'intermediate'},
          {name: 'session 3', level: 'beginner'}
      ];

      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
      expect(component.visibleSessions[0].level).toBe('intermediate');
    });

    it('should sort the sessions correctly by votes', () => {
      component.sessions =
      <ISession[]>[
          {name: 'session 1', level: 'intermediate', voters:  ['John', 'Mike', 'Jim']},
          {name: 'session 2', level: 'intermediate', voters: ['John']},
          {name: 'session 3', level: 'beginner', voters: ['John', 'Joe']}
      ];

      component.filterBy = 'all';
      component.sortBy = 'votes';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions[1].name).toBe('session 3');
    });

    it('should sort the sessions correctly by name', () => {
      component.sessions =
      <ISession[]>[
          {name: 'session 1', level: 'intermediate', voters:  ['John', 'Mike', 'Jim']},
          {name: 'session 3', level: 'beginner', voters: ['John', 'Joe']},
          {name: 'session 2', level: 'intermediate', voters: ['John']}
      ];

      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions[1].name).toBe('session 2');
    });
  });
});
