import { Component, OnInit }  from '@angular/core';
import { IManual } from './manual';
import { ManualService } from './manual.service';

@Component({
    selector: 'home-manuals',
    //moduleId: module.id, absolute path is required for css
    templateUrl: 'app/equip/manual-list.component.html',
    styleUrls: ['app/shared/list.component.css']
})
export class ManualListComponent implements OnInit {
    pageTitle: string = 'Manuals List';
    listFilter: string ='CD';
    errorMessage: string;
    manuals: IManual[];

        constructor(private _manualService: ManualService) {
    }
    	ngOnInit(): void {
            this._manualService.getManuals()
                .subscribe(manuals => this.manuals = manuals,
                    error => this.errorMessage = <any>error )
	}
}

