import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    //value ---  reactjs
    //args[0]  --- to
    //args[1]  --- welcome 
    return `${args[1]} ${args[0]} ${value}`;
  }

}

