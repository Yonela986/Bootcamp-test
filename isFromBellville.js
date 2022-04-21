function isFromBellville(number){
    var results = number.startsWith("CY");
     return results;
 }

assert.equal(isFromBellville('CY 123'), true);
assert.equal(isFromBellville('CJ 123'), false);