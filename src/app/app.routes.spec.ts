import { routes } from './app.routes';
import { MusicPage } from './presentation/pages/music/music.page';

describe('routes', () => {
  it('registers the music catalogue page', () => {
    expect(routes).toContainEqual({ path: 'music', component: MusicPage });
  });
});
