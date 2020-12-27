import {CdkDropList} from '@angular/cdk/drag-drop';

export interface NodeModel {
  id: string;
  type: 'container' | 'item';
  span?: number; // 0 ~ 24
  children?: NodeModel[];
  parent?: NodeModel | null;
  simple?: boolean;
  dropList?: CdkDropList;
}
