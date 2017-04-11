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
var router_1 = require("@angular/router");
var location_service_1 = require("./location.service");
var LocationDetailComponent = (function () {
    function LocationDetailComponent(_route, _router, _locationService) {
        this._route = _route;
        this._router = _router;
        this._locationService = _locationService;
        this.pageTitle = 'Location Detail';
    }
    LocationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getLocation(id);
        });
    };
    LocationDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LocationDetailComponent.prototype.getLocation = function (id) {
        var _this = this;
        this._locationService.getLocation(id).subscribe(function (location) { return _this.location = location; }, function (error) { return _this.errorMessage = error; });
    };
    LocationDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/locations']);
    };
    LocationDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Location Detail: ' + message;
    };
    return LocationDetailComponent;
}());
LocationDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/common/location-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        location_service_1.LocationService])
], LocationDetailComponent);
exports.LocationDetailComponent = LocationDetailComponent;
//# sourceMappingURL=location-detail.component.js.map