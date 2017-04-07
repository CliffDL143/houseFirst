import { Component, OnInit }  from '@angular/core';
import { ITool } from './tool';
import { ToolService } from './tool.service';
@Component({
    selector: 'home-tools',
	//moduleId: module.id,
    templateUrl: 'app/equip/tool-list.component.html',
    styleUrls: ['app/shared/list.component.css']

})
export class ToolListComponent  {
    pageTitle: string = 'Tools List';
	listFilter: string ='';
    errorMessage: string;
    tools: ITool[] ;
 
        constructor(private _toolService: ToolService) {
    }
	ngOnInit(): void {
            this._toolService.getTools()
                .subscribe(tools => this.tools = tools,
                    error => this.errorMessage = <any>error )
	}

}