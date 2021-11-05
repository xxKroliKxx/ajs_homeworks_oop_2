import Character from '../js/character';

test('character name length test', () => {
  expect(() => {
    /* eslint-disable no-new */
    new Character('1', 'Magician');
  }).toThrow(new Error('incorrect name length'));
});

test('character type test', () => {
  expect(() => {
    /* eslint-disable no-new */
    new Character('test1', 'incorrectType');
  }).toThrow(new Error('type not found'));
});

test('character get name', () => {
  const name = 'test1';
  expect(new Character(name, 'Magician').name).toBe(name);
});

test('character get type', () => {
  const type = 'Magician';
  expect(new Character('name', type).type).toBe(type);
});

test('character lvl up err', () => {
  const e = new Character('test', 'Magician');
  e.health = 0;
  expect(() => {
    e.levelUp();
  }).toThrow(new Error('character is dead'));
});

test('character lvl up', () => {
  const e = new Character('test', 'Magician');
  e.levelUp();
  const right = new Character('test', 'Magician');
  right.level = 2;
  right.attack = 12;
  right.defense = 48;
  right.health = 100;
  expect(e).toEqual(right);
});

test('damage test health 0', () => {
  const e = new Character('test', 'Magician');
  const point = e.health / (1 - e.defense / 100) + 1;
  e.damage(point);
  expect(e.health).toBe(0);
});

test('damage test health 5', () => {
  const e = new Character('test', 'Magician');
  e.damage(20);
  expect(e.health).toBe(88);
});
