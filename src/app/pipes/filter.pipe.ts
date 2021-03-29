import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchValue): any {
    // console.log(value);
    // console.log(searchValue);

    if (!searchValue) {
      return value;
    }
    // console.log(value.filter((v) => v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1));
    return value.filter((v) => v.state.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);

  }

}
