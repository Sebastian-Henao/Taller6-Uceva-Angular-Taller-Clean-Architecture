import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MUSIC_MOCK } from '../../../../mocks/music.mocks';
import { DataService } from '../../../infrastructure/services/data.service';
import { MusicLocalRepositoryImpl } from './music-local.repository.impl';

jest.mock('@faker-js/faker', () => ({ faker: {} }));

describe('MusicLocalRepositoryImpl', () => {
  it('delegates the requested count to the local data source', (done) => {
    const dataService = { getAllMusicLocal: jest.fn().mockReturnValue(of(MUSIC_MOCK)) };
    TestBed.configureTestingModule({
      providers: [
        MusicLocalRepositoryImpl,
        { provide: DataService, useValue: dataService },
      ],
    });
    const repository = TestBed.inject(MusicLocalRepositoryImpl);

    repository.getAll(3).subscribe((music) => {
      expect(music).toEqual(MUSIC_MOCK);
      expect(dataService.getAllMusicLocal).toHaveBeenCalledWith(3);
      done();
    });
  });
});
