import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { ITool } from './tool';
import { ToolService } from './tool.service';

@Component({
    templateUrl: 'app/equip/tool-detail.component.html'
})
export class ToolDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Tool Detail';
    tool: ITool; 
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _toolService: ToolService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.pageTitle += `: ${id}`;               
                this.getTool(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getTool(id: number) {
        this._toolService.getTool(id).subscribe(
            tool => this.tool = tool,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/tools']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Tool Detail: ' + message;
    }
}
