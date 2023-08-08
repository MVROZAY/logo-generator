

const { Circle, Triangle, Square } = require('./shapes');

test('Circle render', () => {
  const circle = new Circle('red');
  expect(circle.render()).toContain('<circle');
});

test('Triangle render', () => {
  const triangle = new Triangle('blue');
  expect(triangle.render()).toContain('<polygon');
});

test('Square render', () => {
  const square = new Square('green');
  expect(square.render()).toContain('<rect');
});
