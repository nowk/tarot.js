/* jshint node: true */

var assert = require('chai').assert;
var Tarot = require('..');

describe("Tarot", function() {
  it("parses the cc data from the string", function() {
    var track = '%B1234567890123445^PADILLA/L.                ^9901120000000000000000123000000?0';
    var cc = new Tarot(track);
    assert.equal(cc.number, '1234567890123445');
    assert.equal(cc.cardHolder, 'L. PADILLA');
    assert.equal(cc.expiration, '0199');
  });
});

