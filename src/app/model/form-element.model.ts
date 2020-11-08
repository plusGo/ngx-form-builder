import {FormFieldType} from '../core/type/form-field.type';

export interface FieldElement {
  label?: string;
  id?: string | FormFieldType;
}
