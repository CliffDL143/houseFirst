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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var ToolService = (function () {
    //   private _toolUrl = 'http://46.101.5.34/house1/testdata/tools.json';
    function ToolService(_http) {
        this._http = _http;
        this._toolUrl = 'api/equip/tools.json';
    }
    ToolService.prototype.getTools = function () {
        return this._http.get(this._toolUrl)
            .map(function (response) { return response.json(); });
        //   .do(data => console.log('All: ' + JSON.stringify(data)))
        //   .catch( this.handleError );
    };
    ToolService.prototype.getTool = function (id) {
        return this.getTools()
            .map(function (tools) { return tools.find(function (t) { return t.toolId === id; }); });
    };
    ToolService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return ToolService;
}());
ToolService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ToolService);
exports.ToolService = ToolService;
//# sourceMappingURL=tool.service.js.map