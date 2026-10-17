import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { JunglersTableComponent } from './junglers-table.component';
import { JUNGLERS_MOCK } from '../../../mocks/junglers.mocks';

describe('JunglersTableComponent', () => {
  let component: JunglersTableComponent;
  let fixture: ComponentFixture<JunglersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JunglersTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(JunglersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada jungler', () => {
    component.junglers = JUNGLERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.junglers.length);
  });

  it('debería mostrar los datos del jungler en cada columna', () => {
    component.junglers = JUNGLERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const jungler = component.junglers[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(jungler.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(jungler.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(jungler.title);
      expect(columns[3].nativeElement.textContent.trim()).toBe(jungler.role);
      expect(columns[4].nativeElement.textContent.trim()).toBe(jungler.difficulty);
      expect(columns[5].nativeElement.textContent.trim()).toBe(jungler.region);
      expect(columns[6].nativeElement.textContent.trim()).toBe(jungler.mainAbilities);
    });
  });

  it('debería mapear correctamente cada rol a su BadgeType', () => {
    expect(component.roleMap['Luchador']).toBe('primary');
    expect(component.roleMap['Asesino']).toBe('danger');
    expect(component.roleMap['Tanque']).toBe('success');
    expect(component.roleMap['Mago']).toBe('info');
    expect(component.roleMap['Tirador']).toBe('warning');
  });

  it('debería mapear correctamente cada dificultad a su BadgeType', () => {
    expect(component.difficultyMap['Baja']).toBe('success');
    expect(component.difficultyMap['Media']).toBe('warning');
    expect(component.difficultyMap['Alta']).toBe('danger');
  });
});
