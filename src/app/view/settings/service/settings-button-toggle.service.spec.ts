import { TestBed } from '@angular/core/testing';

import { SettingsButtonToggleService } from './settings-button-toggle.service';

describe('SettingsButtonToggleService', () => {
  let service: SettingsButtonToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsButtonToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
