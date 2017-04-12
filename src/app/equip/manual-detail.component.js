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
var manual_service_1 = require("./manual.service");
var ManualDetailComponent = (function () {
    function ManualDetailComponent(_route, _router, _manualService) {
        this._route = _route;
        this._router = _router;
        this._manualService = _manualService;
        this.pageTitle = 'Manual Detail';
    }
    ManualDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.pageTitle += ": " + id;
            _this.getManual(id);
        });
    };
    ManualDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ManualDetailComponent.prototype.getManual = function (id) {
        var _this = this;
        this._manualService.getManual(id).subscribe(function (manual) { return _this.manual = manual; }, function (error) { return _this.errorMessage = error; });
    };
    ManualDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/manuals']);
    };
    ManualDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Tool Detail: ' + message;
    };
    return ManualDetailComponent;
}());
ManualDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/equip/manual-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        manual_service_1.ManualService])
], ManualDetailComponent);
exports.ManualDetailComponent = ManualDetailComponent;
//# sourceMappingURL=manual-detail.component.js.map