
# co-lazy

  Lazily create a [co stream](https://github.com/juliangruber/co-stream) when
  it's first read from.

  Useful for when streams need setup and you for example map them over values
  with `co-cat`.

## Example

```js
var lazy = require('co-lazy');

var stream = lazy(function*(){
  yield doSomeSetup();

  return function*(end){
    // .. the stream implementation  
  }
});
```

## API

### lazy(fn)

  Lazily create a stream from `fn`, returning a stream immediately.

## Installation

```bash
$ npm install co-lazy
```

## License

  MIT

