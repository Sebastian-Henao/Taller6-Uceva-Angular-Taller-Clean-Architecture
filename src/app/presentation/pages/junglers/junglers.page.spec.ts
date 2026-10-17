import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { GetAllJunglersUseCase } from '../../../core/application/usecases/get-all-junglers.usecase';
import { JUNGLERS_MOCK } from '../../../mocks/junglers.mocks';
import { JunglersTableComponent } from '../../components/junglers-table/junglers-table.component';
import { JunglersPage } from './junglers.page';

describe('JunglersPage', () => {
  let component: JunglersPage;
  let fixture: ComponentFixture<JunglersPage>;

  const GetAllJunglersUseCaseMock = { execute: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JunglersPage, JunglersTableComponent],
    })
    .overrideComponent(JunglersPage, {
      set: {
        providers: [
          { provide: GetAllJunglersUseCase, useValue: GetAllJunglersUseCaseMock }
        ]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(JunglersPage);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
    expect(component.state).toBe('init');
    expect(component.junglers).toEqual([]);
  });

  it('debe cargar los junglers y cambiar el estado a success', () => {
    GetAllJunglersUseCaseMock.execute.mockReturnValue(of(JUNGLERS_MOCK));
    fixture.detectChanges();
    expect(component.junglers).toEqual(JUNGLERS_MOCK);
    expect(component.state).toBe('success');
  });

  it('no debería cargar los junglers y cambiar el estado a error', () => {
    GetAllJunglersUseCaseMock.execute.mockReturnValue(
      throwError(() => new Error('error'))
    );
    fixture.detectChanges();
    expect(component.junglers).toEqual([]);
    expect(component.state).toBe('error');
  });
});
