"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ToolListComponent = (function () {
    function ToolListComponent() {
        this.pageTitle = 'Tools List';
        this.listFilter = '';
        this.tools = [
            {
                id: 1,
                item: 'Saw',
                location: 'Shed',
                qty: 2,
                size: 'Medium',
                partOfSet: -1,
                dateBought: '2017-03-01',
                comment: 'Spare blades'
            },
            {
                id: 2,
                item: 'Fork',
                location: 'Shed',
                qty: 1,
                size: 'Large',
                partOfSet: 0,
                dateBought: '2016-03-01',
                comment: ''
            },
            {
                id: 3,
                item: 'Spanner',
                location: 'Attic',
                qty: 10,
                size: 'Various',
                partOfSet: -1,
                dateBought: '2015-03-01',
                comment: 'Drop forge'
            }
        ];
    }
    /*
        toggleImage(): void {
            this.showImage = !this.showImage;
        }
    */
    ToolListComponent.prototype.ngOnInit = function () {
        console.log('In Oninit');
    };
    return ToolListComponent;
}());
ToolListComponent = __decorate([
    core_1.Component({
        selector: 'home-tools',
        //moduleId: module.id,
        templateUrl: 'app/equip/tool-list.component.html',
        styleUrls: ['app/shared/list.component.css']
    })
], ToolListComponent);
exports.ToolListComponent = ToolListComponent;
//# sourceMappingURL=tool-list.component.js.map