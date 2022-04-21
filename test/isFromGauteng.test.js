describe("isFromGauteng", () => {
    it("Should return true if the registration number is for Gauteng", () => {
        assert.equal(isFromGauteng('DR 45 LR GP'), true); 
    })

    it("It should return false if the registration number is not from Gauteng.", () => {
        assert.equal(isFromGauteng('CJ 123 908'), false);
    })
})
