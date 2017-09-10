import { Pipe, PipeTransform } from '@angular/core';

import { serializer } from './safe.util';

@Pipe({
  name: 'json',
  pure: false,
})
export class SafeJsonPipe implements PipeTransform {
  transform(obj: any, spaces = 2): string {
    return JSON.stringify(obj, serializer(), spaces);
  }
}
