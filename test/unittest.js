const response = require("../helpers/response");
const chai = require("chai");
const expect = chai.expect;
/*
  do some unit tests here
*/
describe("unit tests", () => {
  describe("response functions", () => {
    it("success response", done => {
      const res = response.success({ response: "success" });
      expect(res.statusCode).to.equal(200);
      done();
    });

    it("failure response", done => {
      const res = response.failure({ response: "err" });
      expect(res.statusCode).to.equal(500);
      done();
    });
  });
});
