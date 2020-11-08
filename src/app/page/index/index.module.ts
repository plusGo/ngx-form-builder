import {NgModule} from '@angular/core';
import {IndexComponent} from './index.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AceEditorModule} from 'ng2-ace-editor';
import {FormFiledSchemaFormComponent} from './form-filed-schema-form/form-filed-schema-form.component';
import {FormFieldLogicFormComponent} from './form-field-logic-form/form-field-logic-form.component';


@NgModule({
  declarations: [IndexComponent, FormFiledSchemaFormComponent, FormFieldLogicFormComponent],
  imports: [
    ShareModule,
    AceEditorModule,
    DragDropModule,
    RouterModule.forChild([
      {path: '', component: IndexComponent}
    ])
  ],
  entryComponents: [
    FormFieldLogicFormComponent
  ]
})
export class IndexModule {
}
