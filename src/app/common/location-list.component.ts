import { Component, OnInit }  from '@angular/core';
import { ILocation } from './location';
import { LocationService } from './location.service';

@Component({
    selector: 'home-locations',
    //moduleId: module.id, absolute path is required for css
    templateUrl: 'app/common/location-list.component.html',
    styleUrls: ['app/shared/list.component.css']
})
export class LocationListComponent implements OnInit {
    pageTitle: string = 'Locations List';
    listFilter: string = 'TV';
    errorMessage: string;

    locations: ILocation[];

    constructor(private _locationService: LocationService) {
    }

    	ngOnInit(): void {
            this._locationService.getLocations()
                .subscribe(locations => this.locations = locations,
                    error => this.errorMessage = <any>error )
	}
}
