import { TestBed, inject } from '@angular/core/testing';
import { AlunosDeactivatedGuard } from "./alunos-deactivated";


describe('AlunosDeactivatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunosDeactivatedGuard]
    });
  });

  it('should be created', inject([AlunosDeactivatedGuard], (service: AlunosDeactivatedGuard) => {
    expect(service).toBeTruthy();
  }));
});
