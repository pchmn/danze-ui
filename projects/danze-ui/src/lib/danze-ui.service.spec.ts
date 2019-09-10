import { TestBed } from '@angular/core/testing';

import { DanzeUiService } from './danze-ui.service';

describe('DanzeUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DanzeUiService = TestBed.get(DanzeUiService);
    expect(service).toBeTruthy();
  });
});
