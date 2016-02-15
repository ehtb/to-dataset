'use strict';

import test from 'tape';
import toDataset from './index';

test('with allowFalse', function(t) {
  t.plan(7);

  const ds = toDataset({
    component: 'link',
    'is-false': false,
    'is-deep': {deep: 1},
    'is-method': () => 'hello',
    'is-method-deep': () => ({a: 1, b: 2}),
    no: false
  });

  t.equal(ds['data-component'], 'link');
  t.equal(ds['data-is-false'], 'false');
  t.equal(ds['data-is-deep-deep'], '1');
  t.equal(ds['data-is-method'], 'hello');
  t.equal(ds['data-is-method-deep-a'], '1');
  t.equal(ds['data-is-method-deep-b'], '2');
  t.equal(ds['data-no'], 'false');
});


test('without allowFalse', function(t) {
  t.plan(1);

  const ds = toDataset({
    no: false
  }, {allowFalse: false});

  t.equal(ds['data-no'], undefined);
});


test('with data', function(t) {
  t.plan(2);

  const ds = toDataset({
    test: 'test'
  }, {
    data: {
      'data-preset': 'preset'
    }
  });

  t.equal(ds['data-test'], 'test');
  t.equal(ds['data-preset'], 'preset');
});
