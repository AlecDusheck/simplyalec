import { TestBed, inject } from '@angular/core/testing';

import { ResumeSenderService } from './resume-sender.service';

describe('ResumeSenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeSenderService]
    });
  });

  it('should be created', inject([ResumeSenderService], (service: ResumeSenderService) => {
    expect(service).toBeTruthy();
  }));
});
