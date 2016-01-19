describe ('triangle', function() {
  it("it is false if the sum of any 2 sides is less than or equal to the 3rd side", function() {
    expect(triangle(2, 2, 6)).to.equal(false);
  });
});
