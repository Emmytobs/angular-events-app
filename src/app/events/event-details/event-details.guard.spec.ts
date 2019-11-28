import { TestBed, async, inject } from '@angular/core/testing';

import { EventDetailsGuard } from './event-details.guard';

describe('EventDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventDetailsGuard]
    });
  });

  it('should ...', inject([EventDetailsGuard], (guard: EventDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
