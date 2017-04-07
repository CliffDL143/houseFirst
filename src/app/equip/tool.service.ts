import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ITool} from './tool';

@Injectable()
export class ToolService {
    private _toolUrl = 'api/equip/tools.json';

    constructor(private _http: Http) { }
    
    getTools(): Observable<ITool[]> {
        return this._http.get(this._toolUrl)
            .map((response: Response) => <ITool[]> response.json())
         //   .do(data => console.log('All: ' + JSON.stringify(data)))
         //   .catch( this.handleError );
    }

}