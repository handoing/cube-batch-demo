module.exports = function () {
  return [
    './data/demo1',
    './data/demo2',
    './data/demo3'
  ].map(function(path) {
    return require(path);
  })
}