import { TestBed } from '@angular/core/testing';

import { PersonajesLocalRepositorieImpl } from './personajes-local.repositorie.impl';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';
import { PERSONAJES_MOCK } from '../../../../mocks/personajes.mocks';
import { Personaje } from '../../../domain/models/personaje.model';

describe('PersonajesLocalRepositorieImpl (Infrastruture)', () => {
  let repository: PersonajesLocalRepositorieImpl;

  const countPersonajes = 5;
  const DataServiceMock = { getAllPersonajesLocal: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PersonajesLocalRepositorieImpl,
        { provide: DataService, useValue: DataServiceMock }
      ]
    })
    .compileComponents()
    repository = TestBed.inject(PersonajesLocalRepositorieImpl);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DatService.getAllPersonajesLocal()', () => {
    const getAllSpy = DataServiceMock.getAllPersonajesLocal.mockReturnValue(of([]));
    repository.getAll(countPersonajes).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countPersonajes);
  });

  it('debe devolver el listado de personajes como Observable', (done) => {
    DataServiceMock.getAllPersonajesLocal.mockReturnValue(of(PERSONAJES_MOCK))
    repository.getAll(countPersonajes).subscribe((personajes: Personaje[]) => {
      expect(personajes).toEqual(PERSONAJES_MOCK);
      done();
    });
  });
});
