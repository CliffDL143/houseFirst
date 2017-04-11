import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IManual} from './manual';

@Injectable()
export class ManualService {
    private _manualUrl = 'api/equip/manuals.json';

    constructor(private _http: Http) { }
    
    getManuals(): Observable<IManual[]> {
        return this._http.get(this._manualUrl)
            .map((response: Response) => <IManual[]> response.json())
         //   .do(data => console.log('All: ' + JSON.stringify(data)))
         //   .catch( this.handleError );
    }

    getManual(id: number): Observable<IManual> {
        return this.getManuals()
            .map((manuals: IManual[]) => manuals.find(m => m.manualId === id))
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error')
    }
}