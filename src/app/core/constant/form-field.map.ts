import {FieldElement} from '../../model/form-element.model';
import {FORM_FIELD_KEYS} from './form-field.key';

export const FormElementData: FieldElement[] = [
  // {label: 'array 数组', id: 'array'},
  {label: 'autocomplete 自动完成', id: 'autocomplete'},
  {label: 'boolean 开关', id: 'boolean'},
  {label: 'cascader 级联选择', id: 'cascader'},
  {label: 'checkbox 多选框', id: 'checkbox'},
  {label: 'date 日期', id: 'date'},
  {label: 'mention 提及', id: 'mention'},
  {label: 'number 数字', id: 'number'},
  // {label: 'object 对象', id: 'object'},
  {label: 'radio 单选框', id: 'radio'},
  {label: 'range 滑动输入条', id: 'range'},
  {label: 'rate 评分', id: 'rate'},
  {label: 'select 选择器', id: 'select'},
  {label: 'string 文本框', id: FORM_FIELD_KEYS.STRING},
  {label: 'tag 标签', id: 'tag'},
  {label: 'text 文本', id: 'text'},
  {label: 'textarea 多行文本框', id: 'textarea'},
  {label: 'time 时间', id: 'time'},
  {label: 'transfer 穿梭框', id: 'transfer'},
  {label: 'tree-select 树选择', id: 'tree-select'},
  {label: 'upload 上传', id: 'upload'},
];
