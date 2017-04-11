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
 //   private _toolUrl = 'http://46.101.5.34/house1/testdata/tools.json';
    constructor(private _http: Http) { }
    
    getTools(): Observable<ITool[]> {
        return this._http.get(this._toolUrl)
            .map((response: Response) => <ITool[]> response.json())
         //   .do(data => console.log('All: ' + JSON.stringify(data)))
         //   .catch( this.handleError );
    }

    getTool(id: number): Observable<ITool> {
        return this.getTools()
            .map((tools: ITool[]) => tools.find(t => t.toolId === id))
    }

    

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}


