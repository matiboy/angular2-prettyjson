import { JsonPipe } from '@angular/common';
import { expect } from 'chai';
import { describe, it } from 'mocha';

import { SafeJsonPipe } from './json.pipe';

describe('Safety', () => {
  it('should throw when using normal Json pipe for circular structures', () => {
    let o: any = {};
    o.a = o;
    let pipe = new JsonPipe();
    let fn = () => {
      pipe.transform(o);
    };
    expect(fn).to.throw(TypeError);
  });
  it('should not throw when using safe json pipe on circular structure', () => {
    let o: any = {};
    o.a = o;
    let pipe = new SafeJsonPipe();
    let outcome = '';
    let fn = () => {
      outcome = pipe.transform(o);
    };
    expect(fn).not.to.throw(TypeError);
    // Should contain the keyword "Circular"
    fn();
    expect(outcome).to.contain('Circular');
  });
});
