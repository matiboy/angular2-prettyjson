# Angular 2 Pretty Json

A module for Angular 2 debug output of objects. Contains a pipe similar to [JsonPipe](https://angular.io/docs/ts/latest/api/common/index/JsonPipe-class.html) but adds support for spacing and handling of circular structures.
Also contains a component that outputs any object with syntax highlight.
Warning: just as the `JsonPipe`, this is an impure pipe and should used only for debugging purposes.

## Install

```
npm install angular2-prettyjson
```

## Usage

### Safe Pipe

The `SafeJsonPipe` aims to override the `JsonPipe` and so uses the same name "json". It also accepts an optional argument `spaces=2` for the JSON stringify spacing.

```js
import {SafeJsonPipe} from 'angular2-prettyjson/prettyjson';

@Component({
  ....
  pipes: [SafeJsonPipe],
  template: `
    <pre>
    {{ circularObj | json }}
    {{ circularObj | json:4 }}
    </pre>
  ` // make sure to use a surrounding element with white-space: pre; for best results
  })
  ...
```

outputs

![2 spaces](https://cloud.githubusercontent.com/assets/487758/15599442/d163cf2a-2415-11e6-8097-f1f9f62fd3ce.png)

![4 spaces](https://cloud.githubusercontent.com/assets/487758/15599411/a6815a8e-2415-11e6-8f1f-e68db77885a2.png)

#### Overriding JsonPipe throughout the app

If you want the Safe Pipe to be used throughout the app, use a multi provider in bootstrap:

```js
import {SafeJsonPipe} from 'angular2-prettyjson/prettyjson';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide, PLATFORM_PIPES} from '@angular/core';

bootstrap(ItunesAppComponent, [provide(PLATFORM_PIPES, {
  useValue: [SafeJsonPipe],
  multi: true
})])
```

### Pretty (and safe) Pipe

The `PrettyJsonPipe` stringifies the object and then adds spans around properties, `null`, arrays etc. You can bind it to the innerHtml of other elements.

```js
import {PrettyJsonPipe} from 'angular2-prettyjson/prettyjson';

@Component({
  ....
  pipes [PrettyJsonPipe],
  template: `
    <pre [innerHtml]="circularObj | prettyjson:3"></pre>
  `
  })
  ...
```

 A good set of styles to use is

 ```css
    .string { color: green; }
    .number { color: darkorange; }
    .boolean { color: blue; }
    .null { color: magenta; }
    .key { color: red; }
 ```

 See output under component below.

### Component

 Creates a `pre` element into which the Pretty Json pipe'd object is dumped as HTML. Takes care of styling.

 Takes an input `[obj]` that can be data bound to any object.

```js
import {PrettyJsonComponent} from 'angular2-prettyjson/prettyjson';

@Component({
  ....
  template: `
    <prettyjson [obj]="theForm.value"></prettyjson>
  `
  })
  export class MyComponent {
    ngOnInit() {
      this.theForm = this.formBuilder.group({
       ...
```

outputs

![Pretty json with syntax highlight](https://cloud.githubusercontent.com/assets/487758/15599410/a68103f4-2415-11e6-8c5e-d86c22abd72b.png)
