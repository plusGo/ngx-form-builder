import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/drag'},
  {path: 'index', loadChildren: () => import('./page/index/index.module').then(m => m.IndexModule)},
  {path: 'demo', loadChildren: () => import('./page/demo/demo.module').then(m => m.DemoModule)},
  {path: 'drag', loadChildren: () => import('./page/drag/drag.module').then(m => m.DragModule)},
];

