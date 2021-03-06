import "reflect-metadata";
import {PrettyJsonPipe} from "../src/prettyjson.pipe";
import htmltree = require("htmltree");

describe("Safety", () => {
  it("should not throw when using safe json pipe on circular structure", () => {
    let o: any = {};
    o.a = o;
    let pipe = new PrettyJsonPipe();
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

describe("Generated markup", () => {
  it("should include spans with correct classes", (done: Function) => {
    let o: any = {
      num: 42,
      othernum: 5,
      somestring: "lalala",
      somearray: [
        55,
        "hello"
      ],
      someobject: {
        someobject: {
          enough: null
        }
      }
    };
    // Expected markup
    // {
    //   <span class="key">"num":</span> <span class="number">42</span>,
    //   <span class="key">"othernum":</span> <span class="number">5</span>,
    //   <span class="key">"somestring":</span> <span class="string">"lalala"</span>,
    //   <span class="key">"somearray":</span> [
    //     <span class="number">55</span>,
    //     <span class="string">"hello"</span>
    //   ],
    //   <span class="key">"someobject":</span> {
    //     <span class="key">"someobject":</span> {
    //       <span class="key">"enough":</span> <span class="null">null</span>
    //     }
    //   }
    // }
    let pipe = new PrettyJsonPipe();
    let outcome = pipe.transform(o);
    // Parse html
    htmltree(outcome, (err: any, htmlDoc: any) => {
      let spans = htmlDoc.root.filter((element: any) => element.type === "tag");
      [0, 2, 4, 6, 9, 10, 11].forEach((index: number) => expect(spans[index].attributes.class).toEqual("key"));
      [1, 3, 7].forEach((index: number) => expect(spans[index].attributes.class).toEqual("number"));
      [5, 8].forEach((index: number) => expect(spans[index].attributes.class).toEqual("string"));
      expect(spans[12].attributes.class).toEqual("null");
      done();
    });
  });
});
