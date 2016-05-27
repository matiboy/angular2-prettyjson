import {Pipe, PipeTransform} from "@angular/core";
import {serializer} from "./safe.util";

@Pipe({
  name: "json"
})
export class SafeJsonPipe implements PipeTransform {
  transform(obj: any, spaces: number= 2): string {
    return JSON.stringify(obj, serializer(), spaces);
  }
}
