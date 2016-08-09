import {Component, Input, ViewEncapsulation, OnInit} from "@angular/core";
import {PrettyJsonPipe} from "./prettyjson.pipe";

@Component({
  selector: "prettyjson",
  pipes: [PrettyJsonPipe],
  template: `
    <pre [innerHtml]="obj | prettyjson">
    </pre>
  `,
  styles: [
    `pre {outline: 1px solid #ccc; padding: 5px; margin: 5px; }
    :host >>> .string { color: green; }
    :host >>> .number { color: darkorange; }
    :host >>> .boolean { color: blue; }
    :host >>> .null { color: magenta; }
    :host >>> .key { color: red; }`
  ]
})
export class PrettyJsonComponent {
  @Input() obj: any;
}
