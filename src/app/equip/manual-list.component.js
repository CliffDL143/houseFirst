"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ManualListComponent = (function () {
    function ManualListComponent() {
        this.pageTitle = 'Manuals List';
        this.manuals = [
            {
                id: 1,
                fileDate: '2016-01-01',
                itemDescription: 'ProSafe Gigabit switch',
                itemModel: 'GS105Ev2',
                itemManufacturer: 'Netgear',
                fileLocation: 1,
                equipLocation: 'Living Room',
                modelUrl: 'https://www.netgear.com/support/product/GS105Ev2?cid=wmt_netgear_organic'
            },
            {
                id: 2,
                fileDate: '2016-01-01',
                itemDescription: 'ProSafe Gigabit switch Quick set up',
                itemModel: 'GS105Ev2',
                itemManufacturer: 'Netgear',
                fileLocation: 1,
                equipLocation: 'Living Room',
                modelUrl: 'https://www.netgear.com/support/product/GS105Ev2?cid=wmt_netgear_organic'
            },
            {
                id: 3,
                fileDate: '2016-01-01',
                itemDescription: 'ProSafe Gigabit switch CD',
                itemModel: 'GS105Ev2',
                itemManufacturer: 'Netgear',
                fileLocation: 1,
                equipLocation: 'Living Room',
                modelUrl: 'https://www.netgear.com/support/product/GS105Ev2?cid=wmt_netgear_organic'
            }
        ];
    }
    return ManualListComponent;
}());
ManualListComponent = __decorate([
    core_1.Component({
        selector: 'home-manuals',
        templateUrl: 'app/equip/manual-list.component.html'
    })
], ManualListComponent);
exports.ManualListComponent = ManualListComponent;
//# sourceMappingURL=manual-list.component.js.map