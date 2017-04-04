import { Component, OnInit }  from '@angular/core';

import { IManual } from './manual';
import { ManualService } from './manual.service';

@Component({
    templateUrl: 'app/manuals/manual-list.component.html',
    styleUrls: ['app/manuals/manual-list.component.css']
})
export class ManualListComponent implements OnInit {
    pageTitle: string = 'Manuals List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    manuals: IManual[];

   constructor(private manualService: ManualService) {

    }
/*
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
*/
    ngOnInit(): void {
        this.manualService.getManuals()
                .subscribe(manuals => this.manuals = manuals,
                           error => this.errorMessage = <any>error);
    }

 /*   onRatingClicked(message: string): void {
        this.pageTitle = 'ManualsList: ' + message;
    }*/
}
