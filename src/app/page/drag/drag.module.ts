import {NgModule} from '@angular/core';
import {DragComponent} from './drag.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ViewBuildTreeNodeComponent} from './view-build-tree-node/view-build-tree-node.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ViewBuildTreeComponent } from './view-build-tree/view-build-tree.component';


@NgModule({
  declarations: [DragComponent, ViewBuildTreeNodeComponent, ViewBuildTreeComponent],
  imports: [
    ShareModule,
    DragDropModule,
    RouterModule.forChild([
      {path: '', component: DragComponent}
    ])
  ]
})
export class DragModule {
}
