import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonUtil {

  public static stringify(value: any): string {
    return JSON.stringify(value, null, 4);
  }

  public static deepStringify(value: any): string {
    Object.keys(value).forEach($key => {
      if (typeof value[$key] === 'function') {
        value[$key] = value[$key].toString();
      }
      if (typeof value[$key] === 'object') {
        JsonUtil.deepStringify(value[$key]);
      }
    });
    return JsonUtil.stringify(value);
  }

}
