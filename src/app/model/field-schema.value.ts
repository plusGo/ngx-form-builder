import {FormFieldType} from '../core/type/form-field.type';

export interface FieldSchemaValue {
  basicSchema: {
    fieldTitle: string;
    fieldCode: string;
    fieldType: FormFieldType;
    required?: boolean;
  }
}
