import {SFComponent} from '@delon/form';
import {FormLogic, FormLogicThen, FormLogicWhen} from './form.logic';

export class FormLogicService {
  logicList: FormLogic[] = [];

  constructor(private component: SFComponent) {
    if (component) {

      component.formValueChange.subscribe(valueChange => this.refresh());
    }
  }

  addLogic(logic: FormLogic): void {
    this.logicList.push(logic);
  }

  refresh(): void {
    const cacheLogicMap = {};
    this.logicList.filter(logic => this.satisfy(logic.when))
      .forEach(logic => cacheLogicMap[logic.given] = logic.then);
    Object.keys(cacheLogicMap).forEach(given => {
      this.action(given, cacheLogicMap[given]);
    });
  }

  /**
   * 满足when条件
   */
  satisfy(when: FormLogicWhen): boolean {
    const prefixValue = this.getDestValue(when.prefix);
    const suffixValue = this.getDestValue(when.suffix);
    debugger
    if (when.compare === 'equal') {
      return prefixValue === suffixValue;
    } else if (when.compare === 'notEqual') {
      return prefixValue !== suffixValue;
    }
    return false;
  }

  action(property: string, action: FormLogicThen): void {
    console.log(property, action);
    const propertyRef = this.component.getProperty(property);
    if (action === 'display') {
      (propertyRef as any).setVisible(true);
    }
    if (action === 'hide') {
      (propertyRef as any).setVisible(false);
    }
  }

  private getDestValue(prefix: string) {
    if (typeof prefix === 'undefined' || prefix === null) {
      return prefix;
    }
    if (prefix.startsWith('$') && prefix.endsWith('$')) {
      const refWord = prefix.substring(1, prefix.length - 1);
      const property = this.component.getProperty(refWord);
      if (property) {
        return this.component.getProperty(refWord).value;
      } else {
        return null;
      }
    } else {
      return prefix;
    }
  }
}
