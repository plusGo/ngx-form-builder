import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IndexLayoutComponent} from './index-layout/index-layout.component';
import {RouterModule} from '@angular/router';
import {DelonFormModule} from '@delon/form';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzTabsModule} from 'ng-zorro-antd/tabs';

export const NG_ZORRO_MODULES = [
  NzModalModule,
  NzButtonModule,
  NzMessageModule,
  NzLayoutModule,
  NzIconModule,
  NzCardModule,
  NzTabsModule
];

@NgModule({
  declarations: [IndexLayoutComponent],
  imports: [
    CommonModule,
    ...NG_ZORRO_MODULES,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DelonFormModule.forRoot()
  ], exports: [
    DelonFormModule,
    RouterModule,
    CommonModule,
    ...NG_ZORRO_MODULES,
    FormsModule,
    ReactiveFormsModule,
    IndexLayoutComponent
  ]
})
export class ShareModule {
}
