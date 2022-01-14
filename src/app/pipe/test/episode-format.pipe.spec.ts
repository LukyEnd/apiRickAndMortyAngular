import { EpisodeFormatPipe } from '../episode-format.pipe';

describe('EpisodeFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new EpisodeFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
