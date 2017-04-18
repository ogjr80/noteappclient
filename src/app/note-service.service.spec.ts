import { TestBed, inject } from '@angular/core/testing';

import { NoteServiceService } from './note-service.service';

describe('NoteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteServiceService]
    });
  });

  it('should ...', inject([NoteServiceService], (service: NoteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
