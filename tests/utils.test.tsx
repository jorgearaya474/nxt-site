import trimWords from '../lib/utils/TrimWords';

test('trims text to specific word limit', () => {
  const inputTxt = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';
  const limit = 5;
  const trimmedTxt = trimWords(inputTxt, limit);

  expect(trimmedTxt).toBe('Lorem ipsum dolor sit amet');
});

test('returns original text when limit is greater than the text size', () => {
  const inputTxt = 'Lorem ipsum';
  const limit = 15;
  const trimmedTxt = trimWords(inputTxt, limit);

  expect(trimmedTxt).toBe(inputTxt);
});

test('handles empty strings', () => {
  const inputTxt = '';
  const limit = 15;
  const trimmedTxt = trimWords(inputTxt, limit);

  expect(trimmedTxt).toBe('');
});