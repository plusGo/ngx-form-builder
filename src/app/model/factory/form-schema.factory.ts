import {SFSchema} from '@delon/form';

export class FormSchemaFactory {
  public static getEmptyFormSchema(): SFSchema {
    return {
      properties: {},
      type: 'object',
      required:[]
    };
  }
}
