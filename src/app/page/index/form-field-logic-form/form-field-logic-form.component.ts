import {Component, Input, OnInit} from '@angular/core';
import {SFSchema} from '@delon/form';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-form-field-logic-form',
  templateUrl: './form-field-logic-form.component.html',
  styleUrls: ['./form-field-logic-form.component.scss']
})
export class FormFieldLogicFormComponent implements OnInit {
  @Input()
  fieldSchemas: SFSchema[] = [];

  constructor(private messageService: NzMessageService,
              private modalRef: NzModalRef) {
  }

  ngOnInit() {
  }

  submit() {
    this.messageService.success('设置成功');
  }
}
