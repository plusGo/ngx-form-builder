import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SFComponent, SFSchema} from '@delon/form';
import {FormLogicService} from '../../../logic/form-logic.service';
import {FormLogic} from '../../../logic/form.logic';

@Component({
  selector: 'app-logic-form',
  templateUrl: './logic-form.component.html',
  styleUrls: ['./logic-form.component.scss']
})
export class LogicFormComponent implements OnInit, AfterViewInit {
  @ViewChild('formRef', {static: false}) formRef: SFComponent;
  schema: SFSchema = {
    properties: {
      type: {type: 'string',},
      name: {type: 'string'},
      result: {type: 'string'},

    },
    required: ['type'],

  };

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const formLogicService = new FormLogicService(this.formRef);
    const logic1 = FormLogic.builder()
      .when('$/type$', 'equal', '$/name$')
      .given('/result')
      .then('hide')
      .build();

    const logic3 = FormLogic.builder()
      .when('$/type$', 'notEqual', '$/name$')
      .given('/result')
      .then('display')
      .build();

    const logic2 = FormLogic.builder()
      .when('$/type$', 'equal', '1')
      .given('/result')
      .then('display')
      .build();
    formLogicService.addLogic(logic1);
    formLogicService.addLogic(logic3);
    formLogicService.addLogic(logic2);
    formLogicService.refresh();
    // formLogicService.addLogic(logic2);
  }

}
