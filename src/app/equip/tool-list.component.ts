import { Component }  from '@angular/core';

@Component({
    selector: 'home-tools',
    templateUrl: 'app/equip/tool-list.component.html'
    //styleUrls: ['app/equip/tool-list.component.css']
})
export class ToolListComponent  {
    pageTitle: string = 'Tools List';
    tools: any[] = [
            {
				id: 1,
				item: 'Saw',
				location: 'Shed',
				qty: 2,
				size: 'Medium',
				partOfSet: -1,
				dateBought: '2017-03-01',
				comment: 'Spare blades'
            },
            {
				id: 2,
				item: 'Fork',
				location: 'Shed',
				qty: 1,
				size: 'Large',
				partOfSet: 0,
				dateBought: '2016-03-01',
				comment: ''
            },
            {
				id: 3,
				item: 'Spanner',
				location: 'Attic',
				qty: 10,
				size: 'Various',
				partOfSet: -1,
				dateBought: '2015-03-01',
				comment: 'Drop forge'
            }		



    ];

}