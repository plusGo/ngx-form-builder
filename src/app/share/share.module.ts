import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IndexLayoutComponent } from './index-layout/index-layout.component';
import {RouterModule} from '@angular/router';
import {DelonFormModule} from '@delon/form';


@NgModule({
  declarations: [IndexLayoutComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DelonFormModule.forRoot()
  ], exports: [
    DelonFormModule,
    RouterModule,
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    IndexLayoutComponent
  ]
})
export class ShareModule {
}
