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
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var LocationService = (function () {
    function LocationService(_http) {
        this._http = _http;
        this._locationUrl = 'api/common/locations.json';
    }
    LocationService.prototype.getLocations = function () {
        return this._http.get(this._locationUrl)
            .map(function (response) { return response.json(); });
        //   .do(data => console.log('All: ' + JSON.stringify(data)))
        //   .catch( this.handleError );
    };
    return LocationService;
}());
LocationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map