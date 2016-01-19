describe ('triangle', function() {

  it("it is true if all sides are equal", function() {
    expect(triangle(3, 3, 3)).to.equal(true);
  });

  it("it is true if two sides are equal", function() {
    expect(triangle(3, 3, 2)).to.equal(true);
  });

  it("it is true if all three sides are different", function() {
    expect(triangle(3, 2, 1)).to.equal(true);
  });
});
