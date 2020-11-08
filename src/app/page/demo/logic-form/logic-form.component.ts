import {Component, OnInit, ViewChild} from '@angular/core';
import {SFComponent, SFSchema} from '@delon/form';
import {timer} from 'rxjs';

@Component({
  selector: 'app-logic-form',
  templateUrl: './logic-form.component.html',
  styleUrls: ['./logic-form.component.scss']
})
export class LogicFormComponent implements OnInit {
  @ViewChild('formRef', {static: false}) formRef: SFComponent;
  schema: SFSchema = {
    properties: {
      type: {type: 'string',},
      name: {type: 'string'},
      pwd: {type: 'string'},
      mobile: {type: 'string'},
      code: {type: 'string'}
    },
    required: ['type'],
    if: {
      properties: {type: {enum: ['1']}}
    },
    then: {
      required: ['mobile', 'code']
    },
    else: {
      required: ['name', 'pwd']
    }
  };

  constructor() {
    timer(5000).subscribe(() => {
      this.formRef.refreshSchema(this.schema);
    });
  }

  ngOnInit() {
  }

}
