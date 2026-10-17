import { routes } from './app.routes';
import { MusicPage } from './presentation/pages/music/music.page';
import { PersonajesPage } from './presentation/pages/personajes/personajes.page';

describe('routes', () => {
  it('registers the music catalogue page', () => {
    expect(routes).toContainEqual({ path: 'music', component: MusicPage });
  });

  it('registers the characters page', () => {
    expect(routes).toContainEqual({ path: 'personajes', component: PersonajesPage });
  });
});
