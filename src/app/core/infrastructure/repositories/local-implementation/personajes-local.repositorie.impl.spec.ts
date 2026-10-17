import { TestBed } from '@angular/core/testing';

import { PersonajesLocalRepositorieImpl } from './personajes-local.repositorie.impl';

describe('PersonajesLocalRepositorieImpl', () => {
  let service: PersonajesLocalRepositorieImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonajesLocalRepositorieImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
