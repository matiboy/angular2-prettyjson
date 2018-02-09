import {Component, Input} from "@angular/core";

@Component({
  selector: "prettyjson",
  styles: [
    `pre {outline: 1px solid #ccc; padding: 5px; margin: 5px; }
    :host >>> span {white-space: normal;}
    :host >>> .string { color: green; }
    :host >>> .number { color: darkorange; }
    :host >>> .boolean { color: blue; }
    :host >>> .null { color: magenta; }
    :host >>> .key { color: red; }`
  ],
  template: `
    <pre [innerHtml]="obj | prettyjson">
    </pre>
  `,
})
export class PrettyJsonComponent {
  @Input() public obj: any;
}
