# To Dataset

Object to DOM Dataset

## API

```js
  toDataset(hash, {data = {}, allowFalse = true} = {});
```

### hash
The object to convert to a dataset, every key will get the ```data``` prefix.

- Hash values can be of type String, Number, Boolean, Function and Object.
- Strings, Numbers and Booleans will be parsed as string values.
- Functions will be called and recursively added to the dataset.
- Objects will be recursively added to the dataset.

### data (optional)
The data object where the dataset will be merged into. Defaults to {}.

### allowFalse (optional)
Set falsy dataset attributes, otherwise ignore. Defaults to true.


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

data === {
  'data-component': 'link',
  'data-is-false': 'false',
  'data-is-deep-deep': '1',
  'data-is-method': 'hello',
  'data-is-method-deep-a': '1',
  'data-is-method-deep-b': '2',
  'data-no': 'false'
};

```
