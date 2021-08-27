import { TestBed } from '@angular/core/testing';

import { VoiceActionsService } from './voice-actions.service';

describe('VoiceActionsService', () => {
  let service: VoiceActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
