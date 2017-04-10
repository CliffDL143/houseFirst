import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ILocation } from './location';

@Injectable()
export class LocationService {
    private _locationUrl = 'api/common/locations.json';
 //   private _locationUrl = 'http://46.101.5.34/house1/testdata/locations.json';    

    constructor(private _http: Http) { }
    
    getLocations(): Observable<ILocation[]> {
        return this._http.get(this._locationUrl)
            .map((response: Response) => <ILocation[]> response.json())
         //   .do(data => console.log('All: ' + JSON.stringify(data)))
         //   .catch( this.handleError );
    }

}