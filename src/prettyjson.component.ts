import {Component, Input, ViewEncapsulation, OnInit} from "@angular/core";
import {PrettyJsonPipe} from "./prettyjson.pipe";

@Component({
  pipes: [PrettyJsonPipe],
  selector: "prettyjson",
  template: `
    <pre [innerHtml]="obj | json">
    </pre>
  `,
  styles: [
    `pre {outline: 1px solid #ccc; padding: 5px; margin: 5px; }
    .string { color: green; }
    .number { color: darkorange; }
    .boolean { color: blue; }
    .null { color: magenta; }
    .key { color: red; }`
  ]
})
export class PrettyJsonComponent {
  @Input() obj: any;
}
