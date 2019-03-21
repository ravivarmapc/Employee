import { Pipe, PipeTransform, Testability } from '@angular/core';

@Pipe({
  name: 'convertName'
})
export class ConvertNamePipe implements PipeTransform {

  transform(value: any, args: any):any {
      return value.replace(args,'Jr');
    
  }

}
