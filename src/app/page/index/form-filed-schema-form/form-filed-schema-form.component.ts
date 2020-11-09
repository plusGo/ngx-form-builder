import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SFComponent, SFSchema, SFStringWidgetSchema} from '@delon/form';
import {SchemaConverter} from '../../../core/converter/schema.converter';
import {FieldSchemaValue} from '../../../model/field-schema.value';


@Component({
  selector: 'app-form-filed-schema-form',
  templateUrl: './form-filed-schema-form.component.html',
  styleUrls: ['./form-filed-schema-form.component.scss']
})
export class FormFiledSchemaFormComponent implements OnInit {
  @ViewChild('basicSchemaFormRef', {static: false}) basicSchemaFormRef: SFComponent;

  @Input()
  set value(fieldSchema: SFSchema) {
    if (!fieldSchema) {
      return;
    }
    const schemaValue = SchemaConverter.schemaConvertToValue(fieldSchema);

    this.basicSchema = {
      properties: {
        fieldType: {
          type: 'string',
          default: schemaValue.basicSchema.fieldType,
          ui: {
            hidden: true
          }
        },
        fieldTitle: {
          type: 'string',
          title: '字段名称',
          default: schemaValue.basicSchema.fieldTitle,
          ui: {placeholder: '请输入字段名称',} as SFStringWidgetSchema
        },
        fieldCode: {
          type: 'string',
          title: '字段编码',
          default: schemaValue.basicSchema.fieldCode,
          ui: {placeholder: '请输入字段编码',} as SFStringWidgetSchema
        },
        required: {type: 'boolean', title: '是否必填', default: schemaValue.basicSchema.required},
      },
      required: ['fieldTitle', 'fieldCode']
    };
    this.basicSchemaFormRef.refreshSchema(this.basicSchema);


  }

  @Output()
  valueChange: EventEmitter<SFSchema> = new EventEmitter();

  basicSchema: SFSchema = {
    properties: {}
  };

  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    const schema = SchemaConverter.valueConvertToSchema(this.formFieldValue);
    this.valueChange.emit(schema);
  }

  get formFieldValue(): FieldSchemaValue {
    return {
      basicSchema: this.basicSchemaFormRef.value
    } as FieldSchemaValue;
  }
}
