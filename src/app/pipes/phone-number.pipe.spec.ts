import { PhoneNumberPipe } from './phone-number.pipe';

describe('PhoneNumberPipe', () => {
  const pipe = new PhoneNumberPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform numbers correctly', () => {
    const numbers = '3000000000';
    const transformed = pipe.transform(numbers);
    expect(transformed).toEqual('300 0000000');
  });

  it('should return default format for empty input', () => {
    const numbers = '';
    const transformed = pipe.transform(numbers);
    expect(transformed).toEqual('( X X X - X X X X X X )');
  });
});
