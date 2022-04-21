function isFromCapeTown(number){
    var results = number.startsWith("CA");
    return results;
  }

assert.equal(isFromCapeTown('CA 123 908'), true);

assert.equal(isFromCapeTown('CJ 123 908'), false);