import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/index'},
  {path: 'index', loadChildren: () => import('./page/index/index.module').then(m => m.IndexModule)},
  {path: 'demo', loadChildren: () => import('./page/demo/demo.module').then(m => m.DemoModule)},
];

