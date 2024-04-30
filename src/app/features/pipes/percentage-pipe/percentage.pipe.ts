import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPercentage',
})
export class PercentagePipe implements PipeTransform {
  transform(value: any, args: any) {
    return value * 100 + ' ' + '%';
  }
}
