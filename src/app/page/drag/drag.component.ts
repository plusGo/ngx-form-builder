import {Component, OnInit} from '@angular/core';
import {NodeModel} from './model/node.model';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss']
})
export class DragComponent implements OnInit {
  buildMaterialTree: NodeModel = {
    id: 'material',
    type: 'container',
    children: [
      {id: 'container1', type: 'container', simple: true},
      {id: 'container2', type: 'container', simple: true},
      {id: 'material1', type: 'item', simple: true},
      {id: 'material2', type: 'item', simple: true},
      {id: 'material3', type: 'item', simple: true},
      {id: 'material4', type: 'item', simple: true},
      {id: 'material5', type: 'item', simple: true},
    ]
  };
  buildViewTree: NodeModel = {
    id: 'zero',
    type: 'container',
    children: [
      {
        id: 'root', type: 'container', span: 24, children: [

          {id: 'root1', type: 'item', span: 8},
          {id: 'root5', type: 'item', span: 8},
          {id: 'root3', type: 'item', span: 8},
          {id: 'root4', type: 'item', span: 8},
        ]
      },
      {
        id: 'rootx', type: 'container', children: [

          // {id: 'rootx1', type: 'item', span: 8},
          // {id: 'rootx5', type: 'item', span: 8},
          // {id: 'rootx3', type: 'item', span: 8},
          // {id: 'rootx4x', type: 'item', span: 8},
        ]
      }
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
