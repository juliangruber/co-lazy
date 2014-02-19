
/**
 * Lazily create a stream from `fn`.
 *
 * @param {Function} fn
 * @return {GeneratorFunction}
 */

module.exports = function lazy(fn){
  var stream;

  return function*(end){
    if (!stream) stream = yield fn();
    return yield stream(end);
  };
}

