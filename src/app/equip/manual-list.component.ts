import { Component }  from '@angular/core';

@Component({
    selector: 'home-manuals',
    templateUrl: 'app/equip/manual-list.component.html'
    //styleUrls: ['app/equip/manual-list.component.css']
})
export class ManualListComponent  {
    pageTitle: string = 'Manuals List';
    manuals: any[] = [
            {
                id: 1,
                fileDate: '2016-01-01',
                itemDescription: 'ProSafe Gigabit switch',
                itemModel: 'GS105Ev2',
                itemManufacturer: 'Netgear',
                fileLocation: 1,
                equipLocation: 'Living Room',
                modelUrl: 'https://www.netgear.com/support/product/GS105Ev2?cid=wmt_netgear_organic'
            },
            {
                id: 2,
                fileDate: '2016-01-01',
                itemDescription: 'ProSafe Gigabit switch Quick set up',
                itemModel: 'GS105Ev2',
                itemManufacturer: 'Netgear',
                fileLocation: 1,
                equipLocation: 'Living Room',
                modelUrl: 'https://www.netgear.com/support/product/GS105Ev2?cid=wmt_netgear_organic'
            },
             {
                id: 3,
                fileDate: '2016-01-01',
                itemDescription: 'ProSafe Gigabit switch CD',
                itemModel: 'GS105Ev2',
                itemManufacturer: 'Netgear',
                fileLocation: 1,
                equipLocation: 'Living Room',
                modelUrl: 'https://www.netgear.com/support/product/GS105Ev2?cid=wmt_netgear_organic'
            }



    ];
}

