import {Component, Input} from "@angular/core";

@Component({
  selector: "prettyjson",
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
