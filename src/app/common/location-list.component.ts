import { Component, OnInit }  from '@angular/core';
import { ILocation } from './location';

@Component({
    selector: 'home-locations',
    //moduleId: module.id, absolute path is required for css
    templateUrl: 'app/common/location-list.component.html',
    styleUrls: ['app/shared/list.component.css']
})
export class LocationListComponent implements OnInit {
    pageTitle: string = 'Locations List';
    listFilter: string ='';
    locations: ILocation[] = [
            {
                id: 1,
                location: 'Desk3_F01',
                defaultType: 'manual',
                description: 'Network Stuff',
                locationArea: 'WC',
                locationActive: true,
                locationInUse: true,
                locationPutawayTo: true,
                locationPutawayFrom: false,    
                locationAudited: false
            },
             {
                id: 2,
                location: 'Desk3_F02',
                defaultType: 'manual',
                description: 'TV Stuff etc',
                locationArea: 'WC',
                locationActive: true,
                locationInUse: true,
                locationPutawayTo: true,
                locationPutawayFrom: false,    
                locationAudited: false,
            }, 
             {
                id: 3,
                location: 'Desk3_F03',
                defaultType: 'manual',
                description: 'Kitchen etc',
                locationArea: 'WC',
                locationActive: true,
                locationInUse: true,
                locationPutawayTo: true,
                locationPutawayFrom: false,    
                locationAudited: false,
            },  
             {
                id: 4,
                location: 'Car',
                defaultType: 'any',
                description: 'In Cars',
                locationArea: 'Other',
                locationActive: true,
                locationInUse: true,
                locationPutawayTo: false,
                locationPutawayFrom: false,    
                locationAudited: false,
            }, 
               {
                id: 5,
                location: 'Box M',
                defaultType: 'any',
                description: 'Manuals',
                locationArea: 'WC',
                locationActive: true,
                locationInUse: true,
                locationPutawayTo: false,
                locationPutawayFrom: false,    
                locationAudited: false,
            }                               
            
    ];
    	ngOnInit(): void {
		console.log('In Oninit')
	}
}
