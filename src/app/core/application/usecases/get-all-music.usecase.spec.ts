import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of, throwError } from 'rxjs';
import { MUSIC_MOCK } from '../../../mocks/music.mocks';
import { MusicRepository } from '../../domain/repositories/music.repository';
import { GetAllMusicUseCase } from './get-all-music.usecase';

describe('GetAllMusicUseCase', () => {
  const repository = { getAll: jest.fn() };
  let useCase: GetAllMusicUseCase;

  beforeEach(() => {
    repository.getAll.mockReset();
    TestBed.configureTestingModule({
      providers: [
        GetAllMusicUseCase,
        { provide: MusicRepository, useValue: repository },
      ],
    });
    useCase = TestBed.inject(GetAllMusicUseCase);
  });

  it('delegates the requested count to the repository', async () => {
    repository.getAll.mockReturnValue(of(MUSIC_MOCK));

    await expect(firstValueFrom(useCase.execute(5))).resolves.toEqual(MUSIC_MOCK);
    expect(repository.getAll).toHaveBeenCalledWith(5);
  });

  it('propagates repository errors', async () => {
    repository.getAll.mockReturnValue(throwError(() => new Error('API unavailable')));

    await expect(firstValueFrom(useCase.execute(5))).rejects.toThrow('API unavailable');
  });
});
