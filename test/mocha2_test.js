const assert = require('assert');

const users = [
  { id: 1, name: 'Lopez' },
  { id: 2, name: 'Ramirez' },
  { id: 3, name: 'Radford' },
  { id: 4, name: 'Vince' },
  { id: 5, name: 'Zampella' }
];

function getUser(id, users) {
  return users.find(user => user.id === id);
}

it('should return the correct user object by ID', function() {
  const id = 2;
  const expectedUser = { id: 2, name: 'Ramirez' };
  const actualUser = getUser(id, users);
  assert.deepStrictEqual(actualUser, expectedUser);
});

it('should return undefined for non-existent ID', function() {
  const id = 8;
  const actualUser = getUser(id, users);
  assert.strictEqual(actualUser, undefined);
});