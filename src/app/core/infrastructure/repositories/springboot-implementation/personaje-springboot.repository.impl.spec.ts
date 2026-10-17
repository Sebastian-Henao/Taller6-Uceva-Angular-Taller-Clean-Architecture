import { TestBed } from '@angular/core/testing';

import { PersonajeSpringbootRepositoryImpl } from './personaje-springboot.repository.impl';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';
import { PERSONAJES_MOCK } from '../../../../mocks/personajes.mocks';
import { Personaje } from '../../../domain/models/personaje.model';

describe('PersonajeSpringbootRepositoryImpl (Infrastructure)', () => {
  let repository: PersonajeSpringbootRepositoryImpl;

  const countPersonajes = 5;
  const DataServiceMock = { getAllPersonajesSpringBoot: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PersonajeSpringbootRepositoryImpl,
        { provide: DataService, useValue: DataServiceMock }
      ]
    })
    .compileComponents();
    repository = TestBed.inject(PersonajeSpringbootRepositoryImpl);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllPersonajesSpringBoot()', () => {
    const getAllSpy = DataServiceMock.getAllPersonajesSpringBoot.mockReturnValue(of([]));
    repository.getAll(countPersonajes).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countPersonajes);
  });

  it('debe devolver el listado de personajes como Observable', (done) => {
    DataServiceMock.getAllPersonajesSpringBoot.mockReturnValue(of(PERSONAJES_MOCK))
    repository.getAll(countPersonajes).subscribe((personajes: Personaje[]) => {
      expect(personajes).toEqual(PERSONAJES_MOCK);
      done();
    });
  });
});
