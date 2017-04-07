"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var location_service_1 = require("./location.service");
var LocationListComponent = (function () {
    function LocationListComponent(_locationService) {
        this._locationService = _locationService;
        this.pageTitle = 'Locations List';
    }
    LocationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._locationService.getLocations()
            .subscribe(function (locations) { return _this.locations = locations; }, function (error) { return _this.errorMessage = error; });
    };
    return LocationListComponent;
}());
LocationListComponent = __decorate([
    core_1.Component({
        selector: 'home-locations',
        //moduleId: module.id, absolute path is required for css
        templateUrl: 'app/common/location-list.component.html',
        styleUrls: ['app/shared/list.component.css']
    }),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationListComponent);
exports.LocationListComponent = LocationListComponent;
//# sourceMappingURL=location-list.component.js.map