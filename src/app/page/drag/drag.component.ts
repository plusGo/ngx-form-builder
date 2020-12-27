import {Component, OnInit} from '@angular/core';
import {NodeModel} from './model/node.model';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss']
})
export class DragComponent implements OnInit {
  buildViewTree: NodeModel = {
    id:'root',
    type:'root',
    children:[
      {
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
      },
      {
        id: 'zero',
        type: 'container',
        children: [
          {
            id: 'roota', type: 'container', span: 24, children: [

              {id: 'roota1', type: 'item', span: 8},
              {id: 'roota5', type: 'item', span: 8},
              {id: 'roota3', type: 'item', span: 8},
              {id: 'roota4', type: 'item', span: 8},
            ]
          },
          {
            id: 'rootx', type: 'container', children: [

              {id: 'rootx1', type: 'item', span: 8},
              {id: 'rootx5', type: 'item', span: 24},
              {id: 'rootx3', type: 'item', span: 8},
              {id: 'rootx4x', type: 'item', span: 8},
            ]
          },
          {
            id: 'bbbbbbbbbbbbb', type: 'container', children: []
          },
          {
            id: 'aaaaaaaaaaaa', type: 'container', children: []
          }
        ]
      }
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
