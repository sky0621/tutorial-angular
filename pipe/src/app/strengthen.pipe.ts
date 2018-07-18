import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strengthen'
})
export class StrengthenPipe implements PipeTransform {

  transform(value: number, args: number): number {
    return value * args;
  }

}
