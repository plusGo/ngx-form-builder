export type FormLogicCompare = 'equal' | 'notEqual';
export type FormLogicThen = 'display' | 'hide';

export interface FormLogicWhen {
  /**
   * $name$ -> propertyPath
   * '2' -> value
   *  2 -> value
   */
  prefix: string;
  compare: FormLogicCompare;
  /**
   * $name$ -> propertyPath
   * '2' -> value
   *  2 -> value
   */
  suffix: string;
}

export class FormLogic {
  /**
   * propertyPath
   */
  given: string;

  /**
   * display;hide;
   */
  then: FormLogicThen;

  /**
   *   propertyPath1 equal propertyPath2
   *   propertyPath1 equal '1'
   *   propertyPath1 notEqual propertyPath2
   *   propertyPath1 notEqual '1'
   */
  when: FormLogicWhen;

  public static builder(): FormLogicBuilder {
    return new FormLogicBuilder();
  }
}

export class FormLogicBuilder {
  formLogic: FormLogic;

  constructor() {
    this.formLogic = new FormLogic();
  }

  given(given: string): FormLogicBuilder {
    this.formLogic.given = given;
    return this;
  }

  then(then: FormLogicThen): FormLogicBuilder {
    this.formLogic.then = then;
    return this;
  }

  when(prefix: string, compare: FormLogicCompare, suffix: string): FormLogicBuilder {
    this.formLogic.when = {
      prefix: prefix,
      compare: compare,
      suffix: suffix
    };
    return this;
  }

  build(): FormLogic {
    return this.formLogic;
  }
}
