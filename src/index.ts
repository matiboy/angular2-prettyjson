import { NgModule } from '@angular/core';

import { PrettyJsonComponent } from './prettyjson.component';
import { PrettyJsonPipe } from './prettyjson.pipe';
import { SafeJsonPipe } from './json.pipe';

export { PrettyJsonComponent } from './prettyjson.component';
export { PrettyJsonPipe } from './prettyjson.pipe';
export { SafeJsonPipe } from './json.pipe';

const declarationsAndExports = [
  PrettyJsonComponent,
  PrettyJsonPipe,
  SafeJsonPipe,
];

@NgModule({
  declarations: declarationsAndExports,
  exports: declarationsAndExports,
})
export class PrettyJsonModule {
}
