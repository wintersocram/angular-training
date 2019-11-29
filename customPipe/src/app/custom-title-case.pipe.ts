import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitleCase'
})
export class CustomTitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return null;

    let referenceIgnore = [
      'the', 'of', 'at', 'in', 'on', 'a', 'an', 'for'
    ];
    let valueList = value.split(' ');

    valueList.forEach((listItem, index) => {
      if(index > 0 && referenceIgnore.includes(listItem.toLowerCase())) {
        valueList[index] = listItem.toLowerCase();
      } else {
        valueList[index] = listItem.substr(0,1).toUpperCase().concat(listItem.substr(1).toLowerCase());
      }
    })

    return valueList.join(' ');
  }
}
