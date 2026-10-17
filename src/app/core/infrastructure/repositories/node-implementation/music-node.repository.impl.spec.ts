import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MUSIC_MOCK } from '../../../../mocks/music.mocks';
import { DataService } from '../../../infrastructure/services/data.service';
import { MusicNodeRepositoryImpl } from './music-node.repository.impl';

jest.mock('@faker-js/faker', () => ({ faker: {} }));

describe('MusicNodeRepositoryImpl', () => {
  it('delegates the requested count to the Node.js data source', (done) => {
    const dataService = { getAllMusicNode: jest.fn().mockReturnValue(of(MUSIC_MOCK)) };
    TestBed.configureTestingModule({
      providers: [
        MusicNodeRepositoryImpl,
        { provide: DataService, useValue: dataService },
      ],
    });
    const repository = TestBed.inject(MusicNodeRepositoryImpl);

    repository.getAll(4).subscribe((music) => {
      expect(music).toEqual(MUSIC_MOCK);
      expect(dataService.getAllMusicNode).toHaveBeenCalledWith(4);
      done();
    });
  });
});
