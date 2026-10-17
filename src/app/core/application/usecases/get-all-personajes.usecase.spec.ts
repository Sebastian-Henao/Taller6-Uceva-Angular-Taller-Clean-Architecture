import { TestBed } from '@angular/core/testing';

import { GetAllPersonajesUsecase } from './get-all-personajes.usecase';
import { PersonajeRepository } from '../../domain/repositories/personaje.repository';
import { firstValueFrom, of, throwError } from 'rxjs';
import { PERSONAJES_MOCK } from '../../../mocks/personajes.mocks';

describe('GetAllPersonajesUsecase', () => {
  let useCase: GetAllPersonajesUsecase;

  const countPersonajes = 5;
  const PersonajeRepositoryMock: jest.Mocked<PersonajeRepository> = { getAll: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        GetAllPersonajesUsecase,
        { provide: PersonajeRepository, useValue: PersonajeRepositoryMock }
      ]
    })
    .compileComponents();
    useCase = TestBed.inject(GetAllPersonajesUsecase);
  });

  it('deberia ser inyectable y crearse correctamente', () => {
    expect(useCase).toBeInstanceOf(GetAllPersonajesUsecase);
  });

  it('deberia delegar la llamada del repository', async () => {
    PersonajeRepositoryMock.getAll.mockReturnValue(of(PERSONAJES_MOCK));
    const result = await firstValueFrom(useCase.execute(countPersonajes));
    expect(PersonajeRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(PersonajeRepositoryMock.getAll).toHaveBeenCalledWith(countPersonajes);
    expect(result).toEqual(PERSONAJES_MOCK);
  });

  it('deberia propagar un error cuando el repositorio emita un error', async () => {
    const errorMessage = 'Fallo la busqueda de personajes';
    PersonajeRepositoryMock.getAll.mockReturnValue(throwError(() => new Error(errorMessage)));
    const result = useCase.execute(countPersonajes);
    await expect(PersonajeRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(PersonajeRepositoryMock.getAll).toHaveBeenCalledWith(countPersonajes);
  });
});
