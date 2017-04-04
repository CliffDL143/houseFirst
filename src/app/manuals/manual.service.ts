import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IManual } from './manual';

@Injectable()
export class ManualService {
    private baseUrl = 'api/manuals';

    constructor(private http: Http) { }

    getManuals(): Observable<IManual[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getManuals: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getManual(id: number): Observable<IManual> {
        if (id === 0) {
        return Observable.of(this.initializeManual());
        };
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .do(data => console.log('getManaul: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteManual(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url, options)
            .do(data => console.log('deleteManual: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveManual(manual: IManual): Observable<IManual> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (manual.id === 0) {
            return this.createManual(manual, options);
        }
        return this.updateManual(manual, options);
    }

    private createManual(manual: IManual, options: RequestOptions): Observable<IManual> {
        manual.id = undefined;
        return this.http.post(this.baseUrl, manual, options)
            .map(this.extractData)
            .do(data => console.log('createManual: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateManual(manual: IManual, options: RequestOptions): Observable<IManual> {
        const url = `${this.baseUrl}/${manual.id}`;
        return this.http.put(url, manual, options)
            .map(() => manual)
            .do(data => console.log('updateManual: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeManual(): IManual {
        // Return an initialized object
        return {
            id: 0,
            fileDate: null,
            itemDescription: null,
            itemModel: null,
            itemManufacturer: null,
            fileLocation: null,
            equipLocation: null,
            tags: [''],
            modelUrl: null           
        };
    }
}
