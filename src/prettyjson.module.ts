import {NgModule} from '@angular/core';
import {PrettyJsonComponent} from './prettyjson.component';
import {PrettyJsonPipe} from './prettyjson.pipe';
import {SafeJsonPipe} from './json.pipe';

@NgModule({
    declarations: [
        PrettyJsonComponent,
        PrettyJsonPipe,
        SafeJsonPipe
    ],
    exports: [
        PrettyJsonComponent,
        PrettyJsonPipe,
        SafeJsonPipe
    ]
})
export class PrettyJsonModule {

}
