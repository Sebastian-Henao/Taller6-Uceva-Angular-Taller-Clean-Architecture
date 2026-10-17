import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../environments/environment';
import { Product } from '../../domain/models/product.model';
import { User } from '../../domain/models/user.model';
import { DataService } from './data.service';
import { USERS_MOCK } from '../../../mocks/users.mocks';
import { PRODUCTS_MOCK } from '../../../mocks/products.mocks';
import { Personaje } from '../../domain/models/personaje.model';
import { PERSONAJES_MOCK } from '../../../mocks/personajes.mocks';

jest.mock('@faker-js/faker', () => ({
  faker: {
    commerce: {
      productName: jest.fn(() => 'Producto Test'),
      price: jest.fn(() => '10.00'),
    },
    person: {
      firstName: jest.fn(() => 'Juan'),
      lastName: jest.fn(() => 'Pérez'),
      fullName: jest.fn(() => 'Juan Pérez'),
    },
    word: {
      noun: jest.fn(() => 'Alias Test'),
    },
    company: {
      name: jest.fn(() => 'Juego Test'),
    },
    number: {
      int: jest.fn(() => 30),
    },
    internet: {
      email: jest.fn(() => 'test@mail.com'),
    },
    helpers: {
      arrayElement: jest.fn((arr) => arr[0]),
    },
  },
}));

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  
  const countUsers = 5;
  const countProducts = 5;
  const countPersonajes = 5;
  const pathUrlNode = `${environment.baseUrlNode}/api`;
  const pathUrlSpringBoot = `${environment.baseUrlSpringBoot}/api`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  it('debe crearse correctamente', () => {
      expect(service).toBeTruthy();
  });
  
  it('debe devolver el listado de usuarios locale', (done) => {
    service.getAllUsersLocal(countUsers).subscribe((users: User[]) => {
      expect(users.length).toEqual(countUsers);
      done();
    });
  });

  it('debe devolver el listado de productos locale', (done) => {
    service.getAllProductsLocal(countProducts).subscribe((products: Product[]) => {
      expect(products.length).toEqual(countProducts);
      done();
    });
  });

  it('debe devolver el listado de personajes local', (done) => {
    service.getAllPersonajesLocal(countPersonajes).subscribe((personajes: Personaje[]) => {
      expect(personajes.length).toEqual(countPersonajes);
      expect(personajes).toEqual(
        Array.from({ length: countPersonajes }, (_, index) => ({
          id: index + 1,
          nombre: 'Juan Pérez',
          alias: 'Alias Test',
          juego: 'Juego Test',
          habilidad: 'Producto Test',
          rol: 'Vanguardia',
        }))
      );
      done();
    });
  });

  it('debe obtener usuarios desde Node por HTTP', () => {
    service.getAllUsersNode(countUsers).subscribe((users) => {
      expect(users).toEqual(USERS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlNode}/users/${countUsers}`);
    expect(req.request.method).toBe('GET');
    req.flush(USERS_MOCK);
  });

  it('debe obtener productos desde Node por HTTP', () => {
    service.getAllProductsNode(countProducts).subscribe((products) => {
      expect(products).toEqual(PRODUCTS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlNode}/products/${countProducts}`);
    expect(req.request.method).toBe('GET');
    req.flush(PRODUCTS_MOCK);
  });

  it('debe obtener personajes desde Node por HTTP', () => {
    service.getAllPersonajesNode(countPersonajes).subscribe((perosonajes) => {
      expect(perosonajes).toEqual(PERSONAJES_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlNode}/personajes/${countPersonajes}`);
    expect(req.request.method).toBe('GET');
    req.flush(PERSONAJES_MOCK);
  });

  it('debe obtener usuarios desde SpringBoot por HTTP', () => {
    service.getAllUsersSpringBoot(countUsers).subscribe((users) => {
      expect(users).toEqual(USERS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlSpringBoot}/users/${countUsers}`);
    expect(req.request.method).toBe('GET');
    req.flush(USERS_MOCK);
  });

  it('debe obtener productos desde SpringBoot por HTTP', () => {
    service.getAllProductsSpringBoot(countProducts).subscribe((products) => {
      expect(products).toEqual(PRODUCTS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlSpringBoot}/products/${countProducts}`);
    expect(req.request.method).toBe('GET');
    req.flush(PRODUCTS_MOCK);
  });


  it('debe obtener personajes desde SpringBoot por HTTP', () => {
    service.getAllPersonajesSpringBoot(countPersonajes).subscribe((personajes) => {
      expect(personajes).toEqual(PERSONAJES_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlSpringBoot}/personajes/${countPersonajes}`);
    expect(req.request.method).toBe('GET');
    req.flush(PERSONAJES_MOCK);
  });
});