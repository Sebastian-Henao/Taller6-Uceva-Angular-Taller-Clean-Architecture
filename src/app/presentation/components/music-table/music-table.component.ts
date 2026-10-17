import { Component, Input } from '@angular/core';
import { Music } from '../../../core/domain/models/music.model';

/**
 * Presenta las canciones recibidas desde la página de música.
 */
@Component({
  selector: 'app-music-table',
  templateUrl: './music-table.component.html',
})
export class MusicTableComponent {
  @Input() music: Music[] = [];
}
