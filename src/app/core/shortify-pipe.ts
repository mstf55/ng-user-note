import { Pipe, PipeTransform } from '@angular/core';
import { last } from 'rxjs/operators';

@Pipe({name: 'shortString'})
export class ShortifyString implements PipeTransform {
  transform(value: string, size?: number): string {
    if(value == "null"){
      return "";
    } 

    if(value.length<size){
      return value;
    }

    value = value.substring(0, size);
    return value + "...";

  }
}