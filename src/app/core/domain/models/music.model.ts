/**
 * Canción mostrada en el catálogo de música.
 */
export interface Music {
  /** Identificador único de la canción. */
  id: number;
  /** Título de la canción. */
  title: string;
  /** Duración de la canción en segundos. */
  durationSeconds: number;
  /** Género musical de la canción. */
  genre: string;
  /** Identificador de quien interpreta la canción. */
  artistId: number;
  /** Identificador del álbum al que pertenece la canción. */
  albumId: number;
}
