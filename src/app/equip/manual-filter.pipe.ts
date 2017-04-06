import {  PipeTransform, Pipe } from '@angular/core';
import { IManual } from './manual';

@Pipe({
    name: 'manualDescriptionFilter'
})
export class ManualFilterPipe implements PipeTransform {

    transform(value: IManual[], filterBy: string): IManual[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((manual: IManual) =>
            manual.itemDescription.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}