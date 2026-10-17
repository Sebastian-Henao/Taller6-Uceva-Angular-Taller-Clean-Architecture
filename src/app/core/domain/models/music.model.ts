/**
 * Géneros musicales admitidos por el catálogo de demostración.
 */
export type MusicGenre = 'Pop' | 'Rock' | 'Jazz' | 'Hip-hop' | 'Clásica';

/**
 * Canción mostrada en el catálogo de música.
 */
export interface Music {
  id: number;
  title: string;
  artist: string;
  album: string;
  genre: MusicGenre;
  releaseYear: number;
}
