import {  PipeTransform, Pipe } from '@angular/core';
import { ILocation } from './location';

@Pipe({
    name: 'locationDescriptionFilter'
})
export class LocationFilterPipe implements PipeTransform {

    transform(value: ILocation[], filterBy: string): ILocation[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((location: ILocation) =>
            location.description.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}