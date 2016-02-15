# To Dataset

Object to DOM Dataset

## API

```js
  toDataset(hash, {data = {}, prefix = null, allowFalse = true} = {});
```

### hash
The object to convert to a dataset, every key will get the ```data``` prefix.
Hash values can be of type String, Number, Boolean, Function and Object.
Strings, Numbers and Booleans will be parsed as string values.
Functions will be called and recursively added to the dataset.
Objects will be recursively added to the dataset.

### data (optional)
The data object where the dataset will be merged into.
Also used for recursive method calls.

### allowFalse (optional)
Set falsy dataset attributes


## Example

```js

import toDataset from 'to-dataset';

const data = toDataset({
  component: 'link',
  'is-false': false,
  'is-deep': {
    deep: 1
  },
  'is-method': () => 'hello',
  'is-method-deep': () => ({
    a: 1,
    b: 2
  }),
  no: false
});

t.equal(data['data-component'], 'link');
t.equal(data['data-is-false'], 'false');
t.equal(data['data-is-deep-deep'], '1');
t.equal(data['data-is-method'], 'hello');
t.equal(data['data-is-method-deep-a'], '1');
t.equal(data['data-is-method-deep-b'], '2');
t.equal(data['data-no'], 'false');

```
