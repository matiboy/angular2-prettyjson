import {NgModule} from '@angular/core/src/metadata/ng_module';
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