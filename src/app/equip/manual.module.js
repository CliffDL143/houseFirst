"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var manual_list_component_1 = require("./manual-list.component");
var manual_detail_component_1 = require("./manual-detail.component");
var manual_filter_pipe_1 = require("./manual-filter.pipe");
var manual_service_1 = require("./manual.service");
var ManualModule = (function () {
    function ManualModule() {
    }
    return ManualModule;
}());
ManualModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild([
                { path: 'manuals', component: manual_list_component_1.ManualListComponent },
                { path: 'manual/:id',
                    component: manual_detail_component_1.ManualDetailComponent
                }
            ])
        ],
        declarations: [
            manual_list_component_1.ManualListComponent,
            manual_detail_component_1.ManualDetailComponent,
            manual_filter_pipe_1.ManualFilterPipe
        ],
        providers: [
            manual_service_1.ManualService
        ]
    })
], ManualModule);
exports.ManualModule = ManualModule;
//# sourceMappingURL=manual.module.js.map