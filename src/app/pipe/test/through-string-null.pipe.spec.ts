import { ThroughStringNullPipe } from '../through-string-null.pipe';

describe('ThroughStringNullPipe', () => {
  it('create an instance', () => {
    const pipe = new ThroughStringNullPipe();
    expect(pipe).toBeTruthy();
  });
});
