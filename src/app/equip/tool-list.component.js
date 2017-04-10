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
var tool_service_1 = require("./tool.service");
var ToolListComponent = (function () {
    function ToolListComponent(_toolService) {
        this._toolService = _toolService;
        this.pageTitle = 'Tools List';
        this.listFilter = '';
        this.listItemFilter = 'Fork';
        this.toolLocationFilter = 'Shed';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    ToolListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ToolListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._toolService.getTools()
            .subscribe(function (tools) { return _this.tools = tools; }, function (error) { return _this.errorMessage = error; });
    };
    ToolListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Tools List: ' + message;
    };
    return ToolListComponent;
}());
ToolListComponent = __decorate([
    core_1.Component({
        selector: 'home-tools',
        //moduleId: module.id,
        templateUrl: 'app/equip/tool-list.component.html',
        styleUrls: ['app/shared/list.component.css']
    }),
    __metadata("design:paramtypes", [tool_service_1.ToolService])
], ToolListComponent);
exports.ToolListComponent = ToolListComponent;
//# sourceMappingURL=tool-list.component.js.map