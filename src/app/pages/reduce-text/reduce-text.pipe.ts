import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceText'
})
export class ReduceTextPipe implements PipeTransform {

  transform(value: string, limit: number = 5): string {
    
    if (!value) return '';

    return value.length > limit
      ? value.substring(0, limit)
      : value;
  }

}