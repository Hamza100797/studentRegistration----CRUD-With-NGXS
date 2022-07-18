import { TestBed } from '@angular/core/testing';

import { StudentRecordService } from './student-record.service';

describe('StudentRecordService', () => {
  let service: StudentRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
