const chai = require("chai");
const expect = chai.expect;
const LambdaTester = require("lambda-tester");
const functions = require("../functions");

describe("Integration tests", () => {
  describe("get data", () => {
    it("should get data from db", done => {
      LambdaTester(functions.getData)
        .event({
           pathParameters: { id: "12345" },
        })
        .expectResult(result => {
          expect().to.equal();
        })
        .verify(done);
    });
  });

  describe("post data", () => {
    it("should post data to db", done => {
      LambdaTester(functions.postData)
        .event({
          body: JSON.stringify({
            id: "54321",
            foo: "cool prop",
            bar: "cooler prop"
          })
        })
        .expectResult(result => {
          expect().to.equal();
        })
        .verify(done);
    });
  });
});
