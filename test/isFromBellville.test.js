describe("isFromBellville", () => {
    it("Should return true if the registration number is for Bellvile", () => {
        assert.equal(isFromBellville('CY 123'), true);
    })

    it("It should return false if the registration number is not from Bellvile.", () => {
        assert.equal(isFromBellville('CJ 123'), false);    })
})
