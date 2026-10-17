import { TestBed } from '@angular/core/testing';

import { PersonajeSpringbootRepositoryImpl } from './personaje-springboot.repository.impl';

describe('PersonajeSpringbootRepositoryImpl', () => {
  let service: PersonajeSpringbootRepositoryImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonajeSpringbootRepositoryImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
