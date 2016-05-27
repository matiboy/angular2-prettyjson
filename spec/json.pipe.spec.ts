import "reflect-metadata";
import {SafeJsonPipe} from "../src/json.pipe";
import {JsonPipe} from "@angular/common";
import chai = require("chai");
let expect = chai.expect;
import mocha = require("mocha");
let describe = mocha.describe;
let it = mocha.it;

describe("Safety", () => {
  it("should throw when using normal Json pipe for circular structures", () => {
    let o: any = {};
    o.a = o;
    let pipe = new JsonPipe();
    let fn = () => {
      pipe.transform(o);
    };
    expect(fn).to.throw(TypeError);
  });
  it("should not throw when using safe json pipe on circular structure", () => {
    let o: any = {};
    o.a = o;
    let pipe = new SafeJsonPipe();
    let outcome = "";
    let fn = () => {
      outcome = pipe.transform(o);
    };
    expect(fn).not.to.throw(TypeError);
    // Should contain the keyword "Circular"
    fn();
    expect(outcome).to.contain("Circular");
  });
});
