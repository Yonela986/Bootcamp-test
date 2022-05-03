describe("totalPhoneBill", () => {
    it("Calculate the total bill for the data provided.", () => {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    })

    it("Calculate the total bill for the data provided.", () => {
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    })
    it("Calculate the total bill for the data provided.", () =>{
        assert.equal('R1.30', totalPhoneBill('sms, sms'));

    })
})

