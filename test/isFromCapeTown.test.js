describe("isFromCapeTown", () => {
    it("Should return true if the registration number is for Cape Town", () => {
        assert.equal(isFromCapeTown('CA 123 908'), true);
    })

    it("It should return false if the registration number is not from Cape Town.", () => {
        assert.equal(isFromCapeTown('CJ 123 908'), false);
    })
})
