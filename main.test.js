describe("Solution", function () {
    it("should return the student with no partner", function () {
        expect(run([2, 4, 5, 4, 2])).to.equal(5);
        expect(run([1, 1, 2, 2, 3, 3, 4])).to.equal(4);
        expect(run([7, 8, 8, 9, 7, 9, 10])).to.equal(10);
        expect(run([10, 10, 20, 20, 30, 30, 40])).to.equal(40);
    });
});
