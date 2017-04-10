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
    listItemFilter: string = 'Fork';
    toolLocationFilter: string = 'Shed';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    tools: ITool[] ;
 
        constructor(private _toolService: ToolService) {
    }

        toggleImage(): void {
        this.showImage = !this.showImage;
    }

	ngOnInit(): void {
            this._toolService.getTools()
                .subscribe(tools => this.tools = tools,
                    error => this.errorMessage = <any>error )
	}

        onRatingClicked(message: string): void {
        this.pageTitle = 'Tools List: ' + message;
    }

}