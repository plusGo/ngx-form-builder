import {NgModule} from '@angular/core';
import {IndexComponent} from './index.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {AceEditorModule} from 'ng2-ace-editor';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    ShareModule,
    AceEditorModule,
    RouterModule.forChild([
      {path: '', component: IndexComponent}
    ])
  ]
})
export class IndexModule {
}
