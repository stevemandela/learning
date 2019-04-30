import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'myPipe'
})
export class MyPipe implements PipeTransform {
    transform (arg1: string, arg2: string ): any {
        return arg1.replace(arg2 , ' ');
    }
}