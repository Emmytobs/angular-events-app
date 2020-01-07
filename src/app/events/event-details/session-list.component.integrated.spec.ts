import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SessionListComponent } from './session-list.component';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { UpvoteComponent } from './upvote.component';
import { CollapsibleWellComponent } from 'src/app/common';
import { DurationPipe } from '../shared';

describe('SessionListComponent', () => {
  // The ComponentFixture is not the component but a wrapper around the component.
  // It provides us with some functionality (like ChangeDetection. Dependency Injection, etc.) that are not in the component
  let
    fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    // The DebugElement is a wrapper, providing extra functionality than the native element (just like the ComponentFixture)
    debugEl: DebugElement;


  // The creation of the instace of the SessionListComponent is usually done in the beforeEach() function.
  // However, since this is an integrated test, the TestBed needs to configure a module
  // This module will be used to run the integrated test, and it is similar to the NgModule(but without the declarations property)
  // And this module has to be constructed asynchronously.
  // So, before creating an instance of the SessionListComponent, we configure the testing module.
  beforeEach(async(() => {
    // Create the mock services that the component used
    const mockAuthService = {
      isAuthenticated() { return true; },
      currentUser: { userName: 'Joe' }
    };
    const mockVoterService = {
      userHasVoted() { return true; }
    };

    // Create the module
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        UpvoteComponent,
        CollapsibleWellComponent,
        DurationPipe
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService },
      ],
      schemas: []
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have the correct session title', () => {
      component.sessions = [{ id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob']}];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      // This basically checks the change detection cycle for each property in the component,
      // including those set in the component's methods, and re-renders to changes to those properties to html
      fixture.detectChanges();

      // the toContain matcher is used because the element may have more content than the text 'Session 1'
      // expect(element.querySelector('[well-title]').textContent).toContain('Session 1');

      // Another method:
      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
    });
  });
});
