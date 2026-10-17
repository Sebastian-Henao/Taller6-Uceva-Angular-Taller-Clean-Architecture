import { TestBed } from "@angular/core/testing";
import { GetAllJunglersUseCase } from "./get-all-junglers.usecase";
import { JunglerRepository } from "../../domain/repositories/jungler.repository";
import { firstValueFrom, of, throwError } from "rxjs";
import { JUNGLERS_MOCK } from "../../../mocks/junglers.mocks";

describe('GetAllJunglersUseCase', () => {
  let useCase: GetAllJunglersUseCase;

  const countJunglers = 3;
  const JunglerRepositoryMock: jest.Mocked<JunglerRepository> = { getAll: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        GetAllJunglersUseCase,
        { provide: JunglerRepository, useValue: JunglerRepositoryMock }
      ]
    }).compileComponents();
    useCase = TestBed.inject(GetAllJunglersUseCase);
  });

  it('debería ser inyectable y crearse correctamente', () => {
    expect(useCase).toBeInstanceOf(GetAllJunglersUseCase);
  });

  it('debería delegar la llamada del repository', async () => {
    JunglerRepositoryMock.getAll.mockReturnValue(of(JUNGLERS_MOCK));
    const result = await firstValueFrom(useCase.execute(countJunglers));
    expect(JunglerRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(JunglerRepositoryMock.getAll).toHaveBeenCalledWith(countJunglers);
    expect(result).toEqual(JUNGLERS_MOCK);
  });

  it('debería propagar un error cuando el repositorio emita un error', async () => {
    const errorMessage = 'Fallo la busqueda de junglers';
    JunglerRepositoryMock.getAll.mockReturnValue(throwError(() => new Error(errorMessage)));
    const result = useCase.execute(countJunglers);
    await expect(firstValueFrom(result)).rejects.toThrow(errorMessage);
    expect(JunglerRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(JunglerRepositoryMock.getAll).toHaveBeenCalledWith(countJunglers);
  });
});
