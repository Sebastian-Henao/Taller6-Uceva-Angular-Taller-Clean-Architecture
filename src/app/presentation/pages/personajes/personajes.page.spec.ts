import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesPage } from './personajes.page';
import { PersonajesTableComponent } from '../../components/personajes-table/personajes-table.component';
import { GetAllPersonajesUsecase } from '../../../core/application/usecases/get-all-personajes.usecase';
import { of, throwError } from 'rxjs';
import { PERSONAJES_MOCK } from '../../../mocks/personajes.mocks';

describe('PersonajesPage', () => {
  let component: PersonajesPage;
  let fixture: ComponentFixture<PersonajesPage>;

  const GetAllPersonajesCaseMock = { execute: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesPage, PersonajesTableComponent],
    })
    .overrideComponent(PersonajesPage, {
      set: {
        providers: [
          { provide: GetAllPersonajesUsecase, useValue: GetAllPersonajesCaseMock }
        ]
      }
    })
    .compileComponents();
    fixture = TestBed.createComponent(PersonajesPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.state).toBe('init');
    expect(component.personajes).toEqual([]);
  });

  it('debe cargar los personajes y cambiar el estado a success', () => {
    GetAllPersonajesCaseMock.execute.mockReturnValue(of(PERSONAJES_MOCK));
    fixture.detectChanges();
    expect(component.personajes).toEqual(PERSONAJES_MOCK);
    expect(component.state).toBe('success');
  });

  it('no deberia cargar los personajes y cambiar el estado a error', () => {
    GetAllPersonajesCaseMock.execute.mockReturnValue(
      throwError(() => new Error('error'))
    );
    fixture.detectChanges();
    expect(component.personajes).toEqual([]);
    expect(component.state).toBe('error');
  });
});
