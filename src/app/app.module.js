"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
// import { WelcomeComponent } from './startup/welcome.component';
var manual_list_component_1 = require("./equip/manual-list.component");
var tool_list_component_1 = require("./equip/tool-list.component");
var tool_filter_pipe_1 = require("./equip/tool-filter.pipe");
var manual_filter_pipe_1 = require("./equip/manual-filter.pipe");
//import { AlertModule } from 'ng2-bootstrap';
//import { BsDropdownModule } from 'ng2-bootstrap';
/* Feature Modules */
//import { ProductModule } from './products/product.module';
//import { ManualModule } from './manuals/manual.module';
function yn(value) {
    return (value === -1) ? 'Yes' : 'No';
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            //  WelcomeComponent,
            //  YesNoComponent,
            manual_list_component_1.ManualListComponent,
            tool_list_component_1.ToolListComponent,
            manual_filter_pipe_1.ManualFilterPipe,
            tool_filter_pipe_1.ToolFilterPipe
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map