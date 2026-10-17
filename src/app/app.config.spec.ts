import { TestBed } from '@angular/core/testing';
import { appConfig } from './app.config';
import { MusicRepository } from './core/domain/repositories/music.repository';
import { MusicLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/music-local.repository.impl';
import { MusicNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/music-node.repository.impl';
import { MusicSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/music-springboot.repository.impl';
import { environment } from '../environments/environment';

jest.mock('@faker-js/faker', () => ({ faker: {} }));

describe('music repository provider', () => {
  const originalSource = environment.musicDataSource;

  afterEach(() => {
    environment.musicDataSource = originalSource;
    TestBed.resetTestingModule();
  });

  it.each([
    ['local', MusicLocalRepositoryImpl],
    ['node', MusicNodeRepositoryImpl],
    ['springboot', MusicSpringBootRepositoryImpl],
  ] as const)('selects the %s implementation', (source, implementation) => {
    environment.musicDataSource = source;
    TestBed.configureTestingModule({ providers: appConfig.providers });

    expect(TestBed.inject(MusicRepository)).toBeInstanceOf(implementation);
  });

  it('fails explicitly for an unsupported data source', () => {
    environment.musicDataSource = 'unsupported' as typeof originalSource;
    TestBed.configureTestingModule({ providers: appConfig.providers });

    expect(() => TestBed.inject(MusicRepository)).toThrow(
      'Fuente de datos de música no soportada: unsupported',
    );
  });
});
