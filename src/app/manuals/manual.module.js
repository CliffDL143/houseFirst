"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var manual_data_1 = require("./manual-data");
var manual_list_component_1 = require("./manual-list.component");
var manual_detail_component_1 = require("./manual-detail.component");
var manual_guard_service_1 = require("./manual-guard.service");
var manual_edit_component_1 = require("./manual-edit.component");
var manual_filter_pipe_1 = require("./manual-filter.pipe");
var manual_service_1 = require("./manual.service");
var shared_module_1 = require("../shared/shared.module");
var ManualModule = (function () {
    function ManualModule() {
    }
    return ManualModule;
}());
ManualModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            forms_1.ReactiveFormsModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(manual_data_1.ManualData),
            router_1.RouterModule.forChild([
                { path: 'manuals', component: manual_list_component_1.ManualListComponent },
                { path: 'manual/:id',
                    canActivate: [manual_guard_service_1.ManualDetailGuard],
                    component: manual_detail_component_1.ManualDetailComponent
                },
                { path: 'manualEdit/:id',
                    canDeactivate: [manual_guard_service_1.ManualEditGuard],
                    component: manual_edit_component_1.ManualEditComponent },
            ])
        ],
        declarations: [
            manual_list_component_1.ManualListComponent,
            manual_detail_component_1.ManualDetailComponent,
            manual_edit_component_1.ManualEditComponent,
            manual_filter_pipe_1.ManualFilterPipe
        ],
        providers: [
            manual_service_1.ManualService,
            manual_guard_service_1.ManualDetailGuard,
            manual_guard_service_1.ManualEditGuard
        ]
    })
], ManualModule);
exports.ManualModule = ManualModule;
//# sourceMappingURL=manual.module.js.map