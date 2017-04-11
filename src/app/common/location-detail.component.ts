import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { ILocation } from './location';
import { LocationService } from './location.service';

@Component({
    templateUrl: 'app/common/location-detail.component.html'
})

export class LocationDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Location Detail';
    location: ILocation;
    errorMessage: string;

    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _locationService: LocationService) {
    }

  ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getLocation(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getLocation(id: number) {
        this._locationService.getLocation(id).subscribe(
            location => this.location = location,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/locations']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Location Detail: ' + message;
    }  
    
    
    
    

}