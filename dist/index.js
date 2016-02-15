'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function dataset(hash) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$data = _ref.data;
  var data = _ref$data === undefined ? {} : _ref$data;
  var _ref$prefix = _ref.prefix;
  var prefix = _ref$prefix === undefined ? null : _ref$prefix;
  var _ref$allowFalse = _ref.allowFalse;
  var allowFalse = _ref$allowFalse === undefined ? true : _ref$allowFalse;

  var notNull = function notNull(v) {
    return v != null;
  };

  for (var key in hash) {
    if (allowFalse && notNull(hash[key]) || hash[key]) {
      var val = hash[key],
          argType = typeof val === 'undefined' ? 'undefined' : _typeof(val);

      switch (argType) {
        case 'string':
        case 'number':
        case 'boolean':
          var attr = ['data', prefix, key].filter(notNull).join('-');
          data[attr] = val.toString();

          break;
        case 'function':
          data = dataset(_defineProperty({}, key, val()), { data: data, prefix: prefix, allowFalse: allowFalse });

          break;
        case 'object':
          data = dataset(val, { data: data, prefix: key, allowFalse: allowFalse });

          break;
      }
    }
  }

  return data;
}

exports.default = dataset;
