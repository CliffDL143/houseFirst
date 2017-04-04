import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IManual } from './manual';

export class ManualData implements InMemoryDbService {

    createDb() {
        let manuals: IManual[] = [
            {
                id: 1,
                fileDate: '2016-01-01',
                itemDescription: 'ProSafe Gigabit switch',
                itemModel: 'GS105Ev2',
                itemManufacturer: 'Netgear',
                fileLocation: 1,
                equipLocation: 'Living Room',
                tags: ['Network'],
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
                tags: ['Network'],
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
                tags: ['Network', 'CD', 'Software'],
                modelUrl: 'https://www.netgear.com/support/product/GS105Ev2?cid=wmt_netgear_organic'
            }
        ];
        return { manuals };
    }
}
