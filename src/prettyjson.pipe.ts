import {Pipe, PipeTransform} from "@angular/core";
import {serializer as circularSerializer} from "./safe.util";

@Pipe({
  name: "prettyjson",
  pure: false
})
export class PrettyJsonPipe implements PipeTransform {
  public transform(obj: any, spaces = 2): string {
    return this._syntaxHighlight(obj, circularSerializer(), spaces);
  }

  private _syntaxHighlight(json: any, serializer: any, spacing: number): string {
    if (json === undefined) {
        return '<span class="undefined"></span>';
    }
    // Credits to the accepted answer here
    // http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
    if (typeof json !== "string") {
      json = JSON.stringify(json, serializer, spacing);
    }
    json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match: any) => {
        let cls = "number";
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = "key";
            } else {
                cls = "string";
            }
        } else if (/true|false/.test(match)) {
            cls = "boolean";
        } else if (/null/.test(match)) {
            cls = "null";
        }
        return `<span class="${cls}">${match}</span>`;
    });
  }
}
