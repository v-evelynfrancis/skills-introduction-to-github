const test = require('node:test');
const assert = require('node:assert/strict');
const { createAppConfig } = require('../src/index');

test('basic app scaffold placeholder test', () => {
  assert.equal(true, true);
});

test('creates source app config', () => {
  const config = createAppConfig();
  assert.equal(config.name, 'basic-app');
  assert.equal(config.version, '1.0.0');
});
