import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MUSIC_MOCK } from '../../../mocks/music.mocks';
import { MusicTableComponent } from './music-table.component';

describe('MusicTableComponent', () => {
  let fixture: ComponentFixture<MusicTableComponent>;
  let component: MusicTableComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [MusicTableComponent] }).compileComponents();
    fixture = TestBed.createComponent(MusicTableComponent);
    component = fixture.componentInstance;
  });

  it('renders the supplied songs and their details', () => {
    component.music = MUSIC_MOCK;
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Midnight Echo');
    expect(fixture.nativeElement.textContent).toContain('Ari Sol');
    expect(fixture.nativeElement.textContent).toContain('Night Signals');
    expect(fixture.nativeElement.textContent).toContain('Pop');
    expect(fixture.nativeElement.textContent).toContain('2024');
  });

  it('renders an empty state when the catalogue has no songs', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('No hay canciones disponibles.');
  });
});
