import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah' //if only the inputType is specified
  ) {
    let val: number;

    if (typeof value === 'string') {
      //str to decimal
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp: number;
    if (inputType === 'cel' && outputType === 'fah') {
      //celsius to farenheit formula
      outputTemp = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val;
    }

    let symbol: 'F' | 'C';

    if (!outputType) {
      symbol = inputType == 'cel' ? 'C' : 'F';
    } else {
      symbol = outputType === 'cel' ? 'C' : 'F';
    }

    return `${outputTemp} °${symbol}`;
  }
}
