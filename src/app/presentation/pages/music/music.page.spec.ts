import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { GetAllMusicUseCase } from '../../../core/application/usecases/get-all-music.usecase';
import { MUSIC_MOCK } from '../../../mocks/music.mocks';
import { MusicPage } from './music.page';

describe('MusicPage', () => {
  let fixture: ComponentFixture<MusicPage>;
  let component: MusicPage;
  const useCase = { execute: jest.fn() };

  beforeEach(async () => {
    useCase.execute.mockReset();
    await TestBed.configureTestingModule({ imports: [MusicPage] })
      .overrideComponent(MusicPage, {
        set: { providers: [{ provide: GetAllMusicUseCase, useValue: useCase }] },
      })
      .compileComponents();
    fixture = TestBed.createComponent(MusicPage);
    component = fixture.componentInstance;
  });

  it('starts in the initial state with an empty catalogue', () => {
    expect(component.state).toBe('init');
    expect(component.music).toEqual([]);
  });

  it('loads the catalogue through its use case', () => {
    useCase.execute.mockReturnValue(of(MUSIC_MOCK));
    fixture.detectChanges();

    expect(useCase.execute).toHaveBeenCalledWith(10);
    expect(component.music).toEqual(MUSIC_MOCK);
    expect(component.state).toBe('success');
    expect(fixture.nativeElement.textContent).toContain('Midnight Echo');
  });

  it('sets the error state if the use case fails', () => {
    useCase.execute.mockReturnValue(throwError(() => new Error('API unavailable')));
    fixture.detectChanges();

    expect(component.state).toBe('error');
    expect(fixture.nativeElement.textContent).toContain('Error al cargar las canciones');
  });
});
