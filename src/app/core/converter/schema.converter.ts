import {SFSchema} from '@delon/form';
import {FieldSchemaValue} from '../../model/field-schema.value';
import {FormFieldType} from '../type/form-field.type';
import {FormSchemaFactory} from '../../model/factory/form-schema.factory';

export class SchemaConverter {
  public static schemaConvertToValue(fieldSchema: SFSchema): FieldSchemaValue {
    const fieldCode = Object.keys(fieldSchema.properties)[0];
    const fieldTitle = fieldSchema.properties[fieldCode].title;
    const fieldType = fieldSchema.properties[fieldCode].type as FormFieldType;
    const required = fieldSchema.required && fieldSchema.required.indexOf(fieldCode) !== -1;

    return {
      basicSchema: {
        fieldCode: fieldCode,
        fieldTitle: fieldTitle,
        fieldType: fieldType,
        required: required
      }
    };
  }

  public static valueConvertToSchema(schemaValue: FieldSchemaValue): SFSchema {
    const emptyFormSchema = FormSchemaFactory.getEmptyFormSchema();
    emptyFormSchema.properties[schemaValue.basicSchema.fieldCode] = {
      title: schemaValue.basicSchema.fieldTitle,
      type: schemaValue.basicSchema.fieldType
    };
    schemaValue.basicSchema.required ? emptyFormSchema.required.push(schemaValue.basicSchema.fieldCode) : null;

    return emptyFormSchema;
  }
}
