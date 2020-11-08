import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FieldElement} from '../../model/form-element.model';
import {FieldElementService} from '../../core/service/field-element.service';
import {SFComponent, SFSchema} from '@delon/form';
import {JsonUtil} from '../../core/util/json.util';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FormFieldType} from '../../core/type/form-field.type';
import {NzModalService} from 'ng-zorro-antd';
import {FormFieldLogicFormComponent} from './form-field-logic-form/form-field-logic-form.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  formElements: FieldElement[] = [];

  builderSchemas: SFSchema[] = [];
  schemaSerialized = '';

  selectedSchema: SFSchema;

  @ViewChildren(SFComponent) fieldFormRefList: QueryList<SFComponent>;

  constructor(private formElementService: FieldElementService,
              private modalService: NzModalService) {
    this.formElements = this.formElementService.getAll();
  }

  ngOnInit() {
  }

  addElement(fieldType: FormFieldType): void {
    const fieldSchema = this.formElementService.getCompleteSchemaByFieldType(fieldType);
    this.builderSchemas.push(fieldSchema);
    if (this.builderSchemas.length === 1) {
      this.selectBuildingField(fieldSchema);
    }
  }

  selectBuildingField(schema: SFSchema): void {
    this.selectedSchema = schema;
    this.refreshSchemaStr();
  }

  run() {
    // this.formEl.refreshSchema();
  }

  private refreshSchemaStr() {
    if (this.selectedSchema) {
      this.schemaSerialized = JsonUtil.deepStringify(this.selectedSchema);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.builderSchemas, event.previousIndex, event.currentIndex);
  }


  onFieldConfigValueChange($event: SFSchema) {
    this.selectedSchema.properties = $event.properties;
    this.selectedSchema.required = $event.required;

    const destFieldSchema = this.fieldFormRefList.find((item, index) => {
      return index === this.builderSchemas.indexOf(this.selectedSchema);
    });
    destFieldSchema.refreshSchema(this.selectedSchema);
    this.refreshSchemaStr();
  }

  editLogicConfig() {
    this.modalService.create({
      nzTitle: '关联设置',
      nzContent: FormFieldLogicFormComponent,
      nzMaskClosable: false,
      nzWidth: 880,
      nzComponentParams: {
        fieldSchemas: this.builderSchemas
      }
    });
  }
}
