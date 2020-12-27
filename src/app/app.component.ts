import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  schema = {
    'properties': {
      '1608907783877': {
        'type': 'string',
        'title': '名称',
        'ui': {
          'placeholder': '请输入名称',
        }
      },
      demo: {
        'properties': {
          '1608907783877': {
            'type': 'string',
            'title': '名称',
            'ui': {
              'placeholder': '请输入名称',
            }
          },
        },
        'type': 'object',
        ui: {
          'showTitle': true,
          type: 'card'
        },
        'required': []
      },
      dem2o: {
        'properties': {
          '1608907783877': {
            'type': 'string',
            'title': '名称',
            'ui': {
              'placeholder': '请输入名称',
            }
          },
        },
        'type': 'object',
        ui: {
          'showTitle': true,
          type: 'card'
        },
        'required': []
      }
    },
    'type': 'object',
    ui: {
      'showTitle': true,
      type: 'card'
    },
    'required': []
  };

  constructor() {
  }
}
