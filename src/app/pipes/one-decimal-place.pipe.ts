import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise take a decimal/float number and rounds it to 1 decimal place
 * Usage:
 *   value | oneDecimalPlace
 * Example:
 *   {{ 2.5555 | oneDecimalPlace }}
 *   formats to: 2.5
*/
@Pipe({name: 'oneDecimalPlace'})
export class OneDecimalPlacePipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(value * 10 ) / 10;
  }
}
