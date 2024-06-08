import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {

    let maxLength = 0

    if (typeof value === 'number') {
      maxLength = 5;
    }

    maxLength = 35;
    if (value.length > maxLength) {
      return value.slice(0, maxLength) + '...';
    }
    return value;
  }

}
