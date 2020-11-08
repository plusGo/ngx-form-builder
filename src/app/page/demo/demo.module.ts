import {NgModule} from '@angular/core';
import {LogicFormComponent} from './logic-form/logic-form.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [LogicFormComponent],
  imports: [
    ShareModule,
    RouterModule.forChild([
      {path: 'logic', component: LogicFormComponent}
    ])
  ]
})
export class DemoModule {
}
