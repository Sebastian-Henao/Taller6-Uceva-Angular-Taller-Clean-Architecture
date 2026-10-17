import { TestBed } from '@angular/core/testing';

import { PersonajeNodeRepositoryImpl } from './personaje-node.repository.impl';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';
import { PERSONAJES_MOCK } from '../../../../mocks/personajes.mocks';
import { Personaje } from '../../../domain/models/personaje.model';

describe('PersonajeNodeRepositoryImpl (Infrastructure)', () => {
  let repository: PersonajeNodeRepositoryImpl;

  const countPersonajes = 5;
  const DataServiceMock = { getAllPersonajesNode: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PersonajeNodeRepositoryImpl,
        { provide: DataService, useValue: DataServiceMock }
      ]
    })
    .compileComponents();
    repository = TestBed.inject(PersonajeNodeRepositoryImpl);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllPersonajesNode()', () => {
    const getAllSpy = DataServiceMock.getAllPersonajesNode.mockReturnValue(of([]));
    repository.getAll(countPersonajes).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countPersonajes);
  });

  it('debe devolver el listado de personajes como Observable', (done) => {
    DataServiceMock.getAllPersonajesNode.mockReturnValue(of(PERSONAJES_MOCK))
    repository.getAll(countPersonajes).subscribe((personajes: Personaje[]) => {
      expect(personajes).toEqual(PERSONAJES_MOCK);
      done();
    });
  });
});
