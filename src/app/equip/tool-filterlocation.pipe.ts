import {  PipeTransform, Pipe } from '@angular/core';
import { ITool } from './tool';

@Pipe({
    name: 'toolLocationFilter'
})
export class ToolFilterLocationPipe implements PipeTransform {

    transform(value: ITool[], filterBy: string): ITool[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((tool: ITool) =>
            tool.location.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}