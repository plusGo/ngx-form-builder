import {Component, OnInit, ViewChild} from '@angular/core';
import {FormElement} from '../../model/form-element.model';
import {FormElementService} from '../../core/service/form-element.service';
import {SFComponent, SFSchema} from '@delon/form';
import {JsonUtil} from '../../core/util/json.util';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  static count = 0;

  formElements: FormElement[] = [];
  schema: SFSchema = {
    properties: {}
  };
  schemaStr = '';

  @ViewChild(SFComponent, {static: false}) formEl: SFComponent;

  constructor(private formElementService: FormElementService) {
    this.loadFormElements();
    this.refreshSchemaStr();
  }

  ngOnInit() {
  }

  private loadFormElements() {
    this.formElements = this.formElementService.getAll();
  }

  addElement(elementId: string, fieldName?: string): void {
    IndexComponent.count++;
    if (typeof fieldName === 'undefined' || fieldName === null) {
      fieldName = elementId + IndexComponent.count;
    }
    const elSchema = this.formElementService.getDefaultConfigById(elementId);
    this.schema.properties[fieldName] = elSchema;
    this.refreshSchemaStr();
    this.formEl.refreshSchema();
  }


  submit(value: any) {
  }

  run() {
    this.formEl.refreshSchema();
  }

  private refreshSchemaStr() {
    this.schemaStr = JsonUtil.deepStringify(this.schema);
  }
}
