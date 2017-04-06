import { Component, OnChanges, Input }  from '@angular/core';

@Component({
    selector: 'home-yn', 
    templateUrl: './yesno.component.html'
   // styleUrls: ['./yesno.component.css']
})
export class YesNoComponent implements OnChanges {
    @Input() partOfSet: number;
    yn: string;

    ngOnChanges(): void {
        if (this.partOfSet === -1){
            this.yn = "Yes"
        } else {
            this.yn = "No"
        }
    }


}