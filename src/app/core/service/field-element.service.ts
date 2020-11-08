import {Injectable} from '@angular/core';
import {FieldElement} from '../../model/form-element.model';
import {
  SFAutoCompleteWidgetSchema,
  SFCheckboxWidgetSchema,
  SFRadioWidgetSchema,
  SFRateWidgetSchema,
  SFSchema,
  SFSelectWidgetSchema,
  SFSliderWidgetSchema,
  SFStringWidgetSchema,
  SFTagWidgetSchema,
  SFTextareaWidgetSchema,
  SFTextWidgetSchema,
  SFTimeWidgetSchema,
  SFTransferWidgetSchema,
  SFTreeSelectWidgetSchema,
  SFUploadWidgetSchema
} from '@delon/form';
import {NzMessageService} from 'ng-zorro-antd';
import {of} from 'rxjs';
import {FormElementData} from '../constant/form-field.map';
import {FormFieldType} from '../type/form-field.type';
import {FormSchemaFactory} from '../../model/factory/form-schema.factory';


@Injectable({
  providedIn: 'root'
})
export class FieldElementService {


  constructor(private messageService: NzMessageService) {
  }

  getAll(): FieldElement[] {
    return FormElementData;
  }

  getCompleteSchemaByFieldType(type: FormFieldType, fieldCode = new Date().getTime()): SFSchema {
    const fieldSchema = this.getDefaultConfigByFieldType(type);
    if (fieldSchema) {
      const emptyFormSchema = FormSchemaFactory.getEmptyFormSchema();
      emptyFormSchema.properties[fieldCode] = fieldSchema;
      return emptyFormSchema;
    }
  }

  getDefaultConfigByFieldType(type: FormFieldType): SFSchema {
    if (type === 'string') {
      return this.getDefaultConfigOfStringWidget();
    }
    this.messageService.info('正在努力开发中~~');
    return;
  }

  private getDefaultConfigOfStringWidget(): SFSchema {
    return {
      type: 'string',
      title: '名称',
      ui: {
        placeholder: '请输入名称',
      } as SFStringWidgetSchema,
    } as SFSchema;
  }

  private getDefaultConfigOfBooleanWidget(): SFSchema {
    return {
      type: 'boolean',
      title: '是否启用',
      ui: {
        checkedChildren: '开',
        unCheckedChildren: '关',
      } as SFSliderWidgetSchema,
    } as SFSchema;
  }

  private getDefaultConfigOfAutocompleteWidget(): SFSchema {
    return {
      type: 'string',
      title: '异步',
      ui: {
        widget: 'autocomplete',
        debounceTime: 100,
        asyncData: (input: string) => of(input ? [{label: input, value: 1}, {label: input + input, value: 2}] : []),
      } as SFAutoCompleteWidgetSchema,
    } as SFSchema;
  }

  private getDefaultConfigOfCascaderWidget(): SFSchema {
    return {
      type: 'number',
      title: 'Static',
      enum: [
        {
          value: 110000,
          label: '北京',
          parent: 0,
          children: [
            {
              value: 110100,
              label: '北京市',
              parent: 110000,
              children: [
                {
                  value: 110101,
                  label: '东城区',
                  parent: 110100,
                  isLeaf: true,
                },
                {
                  value: 110105,
                  label: '朝阳区',
                  parent: 110100,
                  isLeaf: true,
                },
              ],
            },
          ],
        },
      ],
      ui: 'cascader',
      default: [110000, 110100, 110105],
    } as SFSchema;
  }

  private getDefaultConfigOfCheckboxWidget(): SFSchema {
    return {
      type: 'string',
      title: 'Mulit',
      enum: ['Apple', 'Pear', 'Orange'],
      ui: {
        widget: 'checkbox',
      } as SFCheckboxWidgetSchema,
      default: [],
    } as SFSchema;
  }

  private getDefaultConfigOfDateWidget(): SFSchema {
    return {
      type: 'string',
      format: 'date-time',
    } as SFSchema;
  }

  private getDefaultConfigOfNumberWidget(): SFSchema {
    return {type: 'number', minimum: 18, maximum: 100, multipleOf: 2} as SFSchema;
  }

  private getDefaultConfigOfRadioWidget(): SFSchema {
    return {
      type: 'string',
      title: 'Button',
      enum: ['A', 'B', 'C'],
      ui: {
        widget: 'radio',
        styleType: 'button',
        buttonStyle: 'solid',
      } as SFRadioWidgetSchema,
      default: 'A',
    } as SFSchema;
  }

  private getDefaultConfigOfRangeWidget(): SFSchema {
    return {
      type: 'number',
      title: '数量',
      ui: {
        widget: 'slider',
      } as SFSliderWidgetSchema,
      default: 10,
    } as SFSchema;
  }

  private getDefaultConfigOfRateWidget(): SFSchema {
    return {
      type: 'number',
      title: '评级',
      default: 4.5,
      ui: {
        widget: 'rate',
      } as SFRateWidgetSchema,
    } as SFSchema;
  }

  private getDefaultConfigOfSelectWidget(): SFSchema {
    return {
      type: 'string',
      title: '状态',
      enum: [
        {label: '待支付', value: 'WAIT_BUYER_PAY'},
        {label: '已支付', value: 'TRADE_SUCCESS'},
        {label: '交易完成', value: 'TRADE_FINISHED'},
      ],
      default: 'WAIT_BUYER_PAY',
      ui: {
        widget: 'select',
      } as SFSelectWidgetSchema,
    } as SFSchema;
  }

  private getDefaultConfigOfTagWidget(): SFSchema {
    return {
      type: 'number',
      title: '兴趣',
      enum: [{value: 1, label: '电影'}, {value: 2, label: '书'}, {value: 3, label: '旅行'}],
      ui: {
        widget: 'tag',
      } as SFTagWidgetSchema,
      default: [1, 2],
    } as SFSchema;
  }

  private getDefaultConfigOfTextWidget(): SFSchema {
    return {type: 'number', ui: {widget: 'text'} as SFTextWidgetSchema} as SFSchema;
  }

  private getDefaultConfigOfTextareaWidget(): SFSchema {
    return {
      type: 'string',
      title: '描述',
      ui: {
        widget: 'textarea',
        autosize: {minRows: 2, maxRows: 6},
      } as SFTextareaWidgetSchema,
    } as SFSchema;
  }

  private getDefaultConfigOfTimeWidget(): SFSchema {
    return {
      type: 'string',
      ui: {widget: 'time'} as SFTimeWidgetSchema,
    } as SFSchema;
  }

  private getDefaultConfigOfTransferWidget(): SFSchema {
    return {
      type: 'number',
      title: '角色',
      enum: [
        {title: 'DNS管理', value: 10},
        {title: 'ECS管理', value: 11},
        {title: 'OSS管理', value: 12},
        {title: 'RDS管理', value: 13},
      ],
      ui: {
        widget: 'transfer',
        titles: ['未拥有', '已拥有'],
      } as SFTransferWidgetSchema,
      default: [11, 12],
    } as SFSchema;
  }

  private getDefaultConfigOfTreeSelectWidget(): SFSchema {
    return {
      type: 'string',
      title: '基本',
      enum: [
        {title: '待支付', key: 'WAIT_BUYER_PAY'},
        {title: '已支付', key: 'TRADE_SUCCESS'},
        {title: '交易完成', key: 'TRADE_FINISHED'},
      ],
      default: 'WAIT_BUYER_PAY',
      ui: {
        widget: 'tree-select',
      } as SFTreeSelectWidgetSchema,
    } as SFSchema;
  }

  private getDefaultConfigOfUploadWidget(): SFSchema {
    return {
      type: 'string',
      title: '单个文件',
      enum: [
        {
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          response: {
            resource_id: 1,
          },
        },
      ],
      ui: {
        widget: 'upload',
        action: '/upload',
        resReName: 'resource_id',
        urlReName: 'url',
      } as SFUploadWidgetSchema,
    } as SFSchema;
  }
}
