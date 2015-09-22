import assert from 'assert';

import thingo from '../src/js/example.js';


describe('add()', function() {
  var tests = [
    {args: [1, 2],       expected: 3},
    {args: [28, 7],    expected: 35},
    {args: [4, 5], expected: 9}
  ];

  tests.forEach(function(test) {
    it('correctly adds ' + test.args.length + ' args', function() {
      var res = thingo.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});