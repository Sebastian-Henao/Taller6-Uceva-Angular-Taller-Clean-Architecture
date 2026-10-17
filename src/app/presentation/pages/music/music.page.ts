import { Component, inject, OnInit } from '@angular/core';
import { GetAllMusicUseCase } from '../../../core/application/usecases/get-all-music.usecase';
import { Music } from '../../../core/domain/models/music.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { MusicTableComponent } from '../../components/music-table/music-table.component';
import { State } from '../../interfaces/state.interface';

/**
 * Carga y presenta el catálogo mediante el caso de uso de música.
 */
@Component({
  selector: 'app-music-page',
  templateUrl: './music.page.html',
  imports: [AlertComponent, MusicTableComponent],
  providers: [GetAllMusicUseCase],
})
export class MusicPage implements OnInit {
  music: Music[] = [];
  state: State = 'init';

  private readonly getAllMusic = inject(GetAllMusicUseCase);

  ngOnInit(): void {
    this.state = 'loading';
    this.getAllMusic.execute(10).subscribe({
      next: (music) => {
        this.music = music;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });
  }
}
