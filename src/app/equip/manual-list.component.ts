import { Component, OnInit }  from '@angular/core';
import { IManual } from './manual';

@Component({
    selector: 'home-manuals',
    //moduleId: module.id, absolute path is required for css
    templateUrl: 'app/equip/manual-list.component.html',
    styleUrls: ['app/shared/list.component.css']
})
export class ManualListComponent implements OnInit {
    pageTitle: string = 'Manuals List';
    listFilter: string ='';
    manuals: IManual[] = [
            {
                id: 1,
                fileDate: '2016-01-01',
                itemDescription: 'ProSafe Gigabit switch',
                itemModel: 'GS105Ev2',
                itemManufacturer: 'Netgear',
                fileLocation: 'Desk3_F01',
                equipLocation: 'Living Room',
                modelUrl: 'https://www.netgear.com/support/product/GS105Ev2?cid=wmt_netgear_organic'
            },
            {
                id: 2,
                fileDate: '2016-01-01',
                itemDescription: 'ProSafe Gigabit switch Quick set up',
                itemModel: 'GS105Ev2',
                itemManufacturer: 'Netgear',
                fileLocation: 'Desk3_F01',
                equipLocation: 'Living Room',
                modelUrl: 'https://www.netgear.com/support/product/GS105Ev2?cid=wmt_netgear_organic'
            },
             {
                id: 3,
                fileDate: '2016-01-01',
                itemDescription: 'ProSafe Gigabit switch CD',
                itemModel: 'GS105Ev2',
                itemManufacturer: 'Netgear',
                fileLocation: 'Desk3_F01',
                equipLocation: 'Living Room',
                modelUrl: 'https://www.netgear.com/support/product/GS105Ev2?cid=wmt_netgear_organic'
            }
    ];
    	ngOnInit(): void {
		console.log('In Oninit')
	}
}

