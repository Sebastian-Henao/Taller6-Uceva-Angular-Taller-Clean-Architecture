import { TestBed } from '@angular/core/testing';
import { appConfig } from './app.config';
import { JunglerRepository } from './core/domain/repositories/jungler.repository';
import { MusicRepository } from './core/domain/repositories/music.repository';
import { PersonajeRepository } from './core/domain/repositories/personaje.repository';
import { ProductRepository } from './core/domain/repositories/product.repository';
import { UserRepository } from './core/domain/repositories/user.repository';
import { JunglerSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/jungler-springboot.repository.impl';
import { MusicSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/music-springboot.repository.impl';
import { PersonajeSpringbootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/personaje-springboot.repository.impl';
import { ProductSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/product-springboot.repository.impl';
import { UserSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/user-springboot.repository.impl';

jest.mock('@faker-js/faker', () => ({ faker: {} }));

describe('application repository providers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: appConfig.providers });
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it.each([
    [UserRepository, UserSpringBootRepositoryImpl],
    [ProductRepository, ProductSpringBootRepositoryImpl],
    [PersonajeRepository, PersonajeSpringbootRepositoryImpl],
    [JunglerRepository, JunglerSpringBootRepositoryImpl],
    [MusicRepository, MusicSpringBootRepositoryImpl],
  ])('provides the configured Spring Boot implementation', (repository, implementation) => {
    expect(TestBed.inject(repository)).toBeInstanceOf(implementation);
  });
});
