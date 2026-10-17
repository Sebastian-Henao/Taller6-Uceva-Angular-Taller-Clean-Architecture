import { TestBed } from '@angular/core/testing';
import { appConfig } from './app.config';
import { ProductRepository } from './core/domain/repositories/product.repository';
import { UserRepository } from './core/domain/repositories/user.repository';
import { MusicRepository } from './core/domain/repositories/music.repository';
import { ProductLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/product-local.repository.impl';
import { UserLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/user-local.repository.impl';
import { MusicLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/music-local.repository.impl';
import { ProductNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/product-node.repository.impl';
import { UserNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/user-node.repository.impl';
import { ProductSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/product-springboot.repository.impl';
import { UserSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/user-springboot.repository.impl';
import { environment } from '../environments/environment';

jest.mock('@faker-js/faker', () => ({ faker: {} }));

describe('repository providers', () => {
  const originalSources = {
    users: environment.userDataSource,
    products: environment.productDataSource,
    music: environment.musicDataSource,
  };

  afterEach(() => {
    environment.userDataSource = originalSources.users;
    environment.productDataSource = originalSources.products;
    environment.musicDataSource = originalSources.music;
    TestBed.resetTestingModule();
  });

  it.each([
    ['users', UserRepository, 'userDataSource', [
      UserLocalRepositoryImpl,
      UserNodeRepositoryImpl,
      UserSpringBootRepositoryImpl,
    ]],
    ['products', ProductRepository, 'productDataSource', [
      ProductLocalRepositoryImpl,
      ProductNodeRepositoryImpl,
      ProductSpringBootRepositoryImpl,
    ]],
  ] as const)(
    'selects local, Node.js, and Spring Boot implementations for %s',
    (_module, repository, sourceProperty, implementations) => {
      const sources = ['local', 'node', 'springboot'] as const;

      sources.forEach((source, index) => {
        environment[sourceProperty] = source;
        TestBed.configureTestingModule({ providers: appConfig.providers });

        expect(TestBed.inject(repository)).toBeInstanceOf(implementations[index]);
        TestBed.resetTestingModule();
      });
    },
  );

  it.each([
    ['users', UserRepository, 'userDataSource', 'Fuente de datos de usuarios no soportada'],
    ['products', ProductRepository, 'productDataSource', 'Fuente de datos de productos no soportada'],
  ] as const)(
    'fails explicitly for an unsupported %s data source',
    (_module, repository, sourceProperty, errorMessage) => {
      environment[sourceProperty] = 'unsupported' as typeof environment[typeof sourceProperty];
      TestBed.configureTestingModule({ providers: appConfig.providers });

      expect(() => TestBed.inject(repository)).toThrow(`${errorMessage}: unsupported`);
    },
  );

  it.each(['local', 'node', 'springboot'] as const)(
    'uses the local implementation for music when the configured source is %s',
    (source) => {
      environment.musicDataSource = source;
      TestBed.configureTestingModule({ providers: appConfig.providers });

      expect(TestBed.inject(MusicRepository)).toBeInstanceOf(MusicLocalRepositoryImpl);
    },
  );
});
