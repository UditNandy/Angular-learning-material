import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter',
  pure: false,
})
export class CustomFilterPipe implements PipeTransform {
  transform(list: any[], gender: string): any {
    let tempValue = list.filter((value) => value.gender === gender);
    return tempValue;
  }
}
