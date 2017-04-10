import {  PipeTransform, Pipe } from '@angular/core';
import { ITool } from './tool';

@Pipe({
    name: 'listItemFilter'
})
export class ToolFilterItemPipe implements PipeTransform {

    transform(value: ITool[], filterBy: string): ITool[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((tool: ITool) =>
            tool.item.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}