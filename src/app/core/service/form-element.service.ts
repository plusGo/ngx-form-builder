import {Injectable} from '@angular/core';
import {FormElement} from '../../model/form-element.model';
import {SFSchema, SFStringWidgetSchema} from '@delon/form';

export const FormElementData: FormElement[] = [
  {label: 'array 数组', id: 'array'},
  {label: 'object 对象', id: 'object'},
  {label: 'string 文本框', id: 'string'},
];

@Injectable({
  providedIn: 'root'
})
export class FormElementService {
  getAll(): FormElement[] {
    return [
      {label: 'array 数组', id: 'object'},
      {label: 'object 对象', id: 'object'},
      {label: 'string 文本框', id: 'string'},
    ];
  }

  getDefaultConfigById(elementId: string): SFSchema {
    if (elementId === 'string') {
      return {
        type: 'string',
        title: '名称',
        maxLength: 6,
        readOnly: false,
        ui: {
          placeholder: '请输入名称',
        } as SFStringWidgetSchema,
      } as SFSchema;
    }
    return {
      type: 'string',
      title: 'Name',
      ui: {
        addOnAfter: 'RMB',
        placeholder: 'RMB结算',
      } as SFStringWidgetSchema,
    } as SFSchema;
  }
}
