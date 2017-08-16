import { TestBed, inject } from '@angular/core/testing';

import { CursosGuard } from './cursos.guard';

describe('CursosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursosGuard]
    });
  });

  it('should be created', inject([CursosGuard], (service: CursosGuard) => {
    expect(service).toBeTruthy();
  }));
});
