import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../environments/environment';
import { Product } from '../../domain/models/product.model';
import { User } from '../../domain/models/user.model';
import { Jungler } from '../../domain/models/jungler.model';
import { DataService } from './data.service';
import { USERS_MOCK } from '../../../mocks/users.mocks';
import { PRODUCTS_MOCK } from '../../../mocks/products.mocks';
import { JUNGLERS_MOCK } from '../../../mocks/junglers.mocks';

jest.mock('@faker-js/faker', () => ({
  faker: {
    commerce: {
      productName: jest.fn(() => 'Producto Test'),
      price: jest.fn(() => '10.00'),
    },
    person: {
      firstName: jest.fn(() => 'Juan'),
      lastName: jest.fn(() => 'Pérez'),
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

  it('debe devolver el listado de junglers locale', (done) => {
    service.getAllJunglersLocal(3).subscribe((junglers: Jungler[]) => {
      expect(junglers.length).toBe(3);
      expect(junglers[0].name).toBe('Lee Sin');
      done();
    });
  });

  it('debe obtener junglers desde Node por HTTP', () => {
    service.getAllJunglersNode(3).subscribe((junglers) => {
      expect(junglers).toEqual(JUNGLERS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlNode}/junglers/3`);
    expect(req.request.method).toBe('GET');
    req.flush(JUNGLERS_MOCK);
  });

  it('debe obtener junglers desde SpringBoot por HTTP', () => {
    service.getAllJunglersSpringBoot(3).subscribe((junglers) => {
      expect(junglers).toEqual(JUNGLERS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlSpringBoot}/junglers/3`);
    expect(req.request.method).toBe('GET');
    req.flush(JUNGLERS_MOCK);
  });

});