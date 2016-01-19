describe ('triangle', function() {

  it("it is false if the sum of 2 sides is <= the third side", function() {
    expect(triangle(2, 2, 6)).to.equal(false);
  });

  it("it is true if all sides are equal", function() {
   expect(triangle(3, 3, 3)).to.equal(true);
  });

  it("it is true if two sides are equal", function() {
   expect(triangle(3, 3, 2)).to.equal(true);
  });

  it("it is true if all three sides are different", function() {
    expect(triangle(2, 3, 4)).to.equal(true);
  });


  // it("it is a different type of triangle", function() {
  //   expect()
  // })
});
