import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {CoreModule} from './core/core.module';
import {ShareModule} from './share/share.module';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {DashboardOutline, FormOutline, PlusOutline, MenuFoldOutline, MenuUnfoldOutline, DragOutline} from '@ant-design/icons-angular/icons';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ShareModule,
    BrowserAnimationsModule,
    NzIconModule,
    RouterModule.forRoot(APP_ROUTES, {
      useHash: true
    })
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US},
    {provide: NZ_ICONS, useValue: [MenuFoldOutline, PlusOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, DragOutline]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
