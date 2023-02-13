const stopwatch = require('../functions/stopwatch')

test('should return length of 8', () => {
  expect(stopwatch(0)).toHaveLength(8)
})

test('When given 0 seconds returns 00:00:00', () => {
  expect(stopwatch(0)).toBe('00:00:00')
})

test('When given 8 seconds returns 00:00:08', () => {
  expect(stopwatch(8)).toBe('00:00:08')
})

test('When given 10 seconds returns 00:00:10', () => {
  expect(stopwatch(10)).toBe('00:00:10')
})

test('When given 59 seconds returns 00:00:59', () => {
  expect(stopwatch(59)).toBe('00:00:59')
})

test('When given 540 seconds returns 00:09:00', () => {
  expect(stopwatch(540)).toBe('00:09:00')
})

test('When given 62 seconds returns 00:01:02', () => {
  expect(stopwatch(62)).toBe('00:01:02')
})

test('When given 3682 seconds returns 01:01:22', () => {
  expect(stopwatch(3682)).toBe('01:01:22')
})

test('When given 28800 seconds returns 08:00:00', () => {
  expect(stopwatch(28800)).toBe('08:00:00')
})

test('When given 39600 seconds returns 11:00:00', () => {
  expect(stopwatch(39600)).toBe('11:00:00')
})

test('When given 1.1 seconds returns 00:00:01', () => {
  expect(stopwatch(1.1)).toBe('00:00:01')
})

