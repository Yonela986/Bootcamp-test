describe("greet", function() {
    it('Yonela is greeted correctly.', function () {
      assert.deepEqual(greet("Yonela"), "Hello, Yonela");
    })
  
    it('codeX is greeted correctly.', function () {
      assert.deepEqual(greet("codeX"), "Hello, codeX");
    })
  })