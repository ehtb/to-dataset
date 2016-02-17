'use strict';

function dataset(hash, {data = {}, prefix = '', allowFalse = true} = {}) {
  const notNull = v => v != null;
  const notEmpty = v => notNull(v) && v.length > 0;

  for (let key in hash) {
    if (allowFalse && notNull(hash[key]) || hash[key]) {
      const val = hash[key];

      switch (typeof val) {
      case 'string':
      case 'number':
      case 'boolean':
        const attr = ['data', prefix, key].filter(notEmpty).join('-');
        data[attr] = val.toString();

        break;
      case 'function':
        data = dataset({[key]: val()}, {data, prefix, allowFalse});

        break;
      case 'object':
        data = dataset(val, {data, prefix: key, allowFalse});

        break;
      }
    }
  }

  return data;
}

export default dataset;
