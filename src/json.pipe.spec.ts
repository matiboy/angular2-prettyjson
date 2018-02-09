
import "reflect-metadata";
import {SafeJsonPipe} from "../src/json.pipe";
import {JsonPipe} from "@angular/common";

describe("Safety", () => {
  it("should throw when using normal Json pipe for circular structures", () => {
    let o: any = {};
    o.a = o;
    let pipe = new JsonPipe();
    let fn = () => {
      pipe.transform(o);
    };
    expect(fn).toThrow(new TypeError('Converting circular structure to JSON'));
  });
  it("should not throw when using safe json pipe on circular structure", () => {
    let o: any = {};
    o.a = o;
    let pipe = new SafeJsonPipe();
    let outcome = "";
    let fn = () => {
      outcome = pipe.transform(o);
    };
    expect(fn).not.toThrow(TypeError);
    // Should contain the keyword "Circular"
    fn();
    expect(outcome).toContain("Circular");
  });
});
