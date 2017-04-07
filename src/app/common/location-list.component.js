"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var LocationListComponent = (function () {
    function LocationListComponent() {
        this.pageTitle = 'Locations List';
        this.listFilter = '';
        this.locations = [
            {
                id: 1,
                location: 'Desk3_F01',
                defaultType: 'manual',
                description: 'Network Stuff',
                locationArea: 'WC',
                locationActive: true,
                locationInUse: true,
                locationPutawayTo: true,
                locationPutawayFrom: false,
                locationAudited: false
            },
            {
                id: 2,
                location: 'Desk3_F02',
                defaultType: 'manual',
                description: 'TV Stuff etc',
                locationArea: 'WC',
                locationActive: true,
                locationInUse: true,
                locationPutawayTo: true,
                locationPutawayFrom: false,
                locationAudited: false,
            },
            {
                id: 3,
                location: 'Desk3_F03',
                defaultType: 'manual',
                description: 'Kitchen etc',
                locationArea: 'WC',
                locationActive: true,
                locationInUse: true,
                locationPutawayTo: true,
                locationPutawayFrom: false,
                locationAudited: false,
            },
            {
                id: 4,
                location: 'Car',
                defaultType: 'any',
                description: 'In Cars',
                locationArea: 'Other',
                locationActive: true,
                locationInUse: true,
                locationPutawayTo: false,
                locationPutawayFrom: false,
                locationAudited: false,
            },
            {
                id: 5,
                location: 'Box M',
                defaultType: 'any',
                description: 'Manuals',
                locationArea: 'WC',
                locationActive: true,
                locationInUse: true,
                locationPutawayTo: false,
                locationPutawayFrom: false,
                locationAudited: false,
            }
        ];
    }
    LocationListComponent.prototype.ngOnInit = function () {
        console.log('In Oninit');
    };
    return LocationListComponent;
}());
LocationListComponent = __decorate([
    core_1.Component({
        selector: 'home-locations',
        //moduleId: module.id, absolute path is required for css
        templateUrl: 'app/common/location-list.component.html',
        styleUrls: ['app/shared/list.component.css']
    })
], LocationListComponent);
exports.LocationListComponent = LocationListComponent;
//# sourceMappingURL=location-list.component.js.map