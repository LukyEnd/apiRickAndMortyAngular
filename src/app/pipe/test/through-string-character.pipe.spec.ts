import { ThroughStringCharacterPipe } from '../through-string-character.pipe';

describe('ThroughStringCharacterPipe', () => {
  it('create an instance', () => {
    const pipe = new ThroughStringCharacterPipe();
    expect(pipe).toBeTruthy();
  });
});
