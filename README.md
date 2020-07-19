[![View on NPM](http://img.shields.io/npm/v/immutable-find-replace.svg)](https://www.npmjs.com/package/immutable-find-replace)
[![Build Status](https://travis-ci.com/Zamaletdinov/immutable-find-replace.svg?branch=master)](https://travis-ci.com/Zamaletdinov/immutable-find-replace)
[![Dependencies Status](https://david-dm.org/Zamaletdinov/immutable-find-replace/status.svg)](https://david-dm.org/Zamaletdinov/immutable-find-replace)

# immutable-find-replace

This library was inspired by and based on [find-replace](https://github.com/75lb/find-replace), does not mutate an initial array and built on top of TypeScript

## Usage

If the `replacements` value is a plain value, it will be used found values will be replaced by it:

```ts
import { immutableFindReplace } from 'immutable-find-replace';

const initialArray = [1, 2, 3, 4, 5];
const result = immutableFindReplace(initialArray, x => x === 5, 10);

console.log(result);
// [1, 2, 3, 4, 10]
```

If the `replacements` value is a function, it will be invoked with the found item and its result used as the replace value:

```ts
import { immutableFindReplace } from 'immutable-find-replace';

const initialArray = [1, 2, 3, 4, 5];
const result = immutableFindReplace(initialArray, x => x === 5, x => x * 20);

console.log(result);
// [1, 2, 3, 4, 100]
```

If the `replacements` isn't provided then found values will be deleted from the initial array:

```ts
import { immutableFindReplace } from 'immutable-find-replace';

const initialArray = [1, 2, 3, 4, 5];
const result = immutableFindReplace(initialArray, x => x > 1 && x < 5);

console.log(result);
// [1, 5]
```

If the `initialArray` does not contain required value, nothing will be changed:

```ts
import { immutableFindReplace } from 'immutable-find-replace';

const initialArray = [1, 2, 3, 4, 5];
const result = immutableFindReplace(initialArray, x => x === 6, 10);

console.log(result);
// [1, 2, 3, 4, 5]
```
