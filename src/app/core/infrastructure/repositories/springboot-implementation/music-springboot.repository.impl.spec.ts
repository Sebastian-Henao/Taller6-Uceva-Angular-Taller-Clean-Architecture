import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MUSIC_MOCK } from '../../../../mocks/music.mocks';
import { DataService } from '../../../infrastructure/services/data.service';
import { MusicSpringBootRepositoryImpl } from './music-springboot.repository.impl';

jest.mock('@faker-js/faker', () => ({ faker: {} }));

describe('MusicSpringBootRepositoryImpl', () => {
  it('delegates the requested count to the Spring Boot data source', (done) => {
    const dataService = { getAllMusicSpringBoot: jest.fn().mockReturnValue(of(MUSIC_MOCK)) };
    TestBed.configureTestingModule({
      providers: [
        MusicSpringBootRepositoryImpl,
        { provide: DataService, useValue: dataService },
      ],
    });
    const repository = TestBed.inject(MusicSpringBootRepositoryImpl);

    repository.getAll(2).subscribe((music) => {
      expect(music).toEqual(MUSIC_MOCK);
      expect(dataService.getAllMusicSpringBoot).toHaveBeenCalledWith(2);
      done();
    });
  });
});
