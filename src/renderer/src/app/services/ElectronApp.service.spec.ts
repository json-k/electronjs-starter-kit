import { TestBed } from '@angular/core/testing';

import { ElectronAppService } from './ElectronApp.service';

describe('ElectronAppService', () => {
  let service: ElectronAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
