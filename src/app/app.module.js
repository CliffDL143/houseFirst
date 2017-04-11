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
var router_1 = require("@angular/router");
//start up
var app_component_1 = require("./app.component");
//Components
var welcome_component_1 = require("./startup/welcome.component");
//import { YesNoComponent } from './shared/yesno.component';
//test
var product_list_component_1 = require("./products/product-list.component");
var product_detail_component_1 = require("./products/product-detail.component");
var product_filter_pipe_1 = require("./products/product-filter.pipe");
//common
var star_component_1 = require("./shared/star.component");
//Library
var location_list_component_1 = require("./common/location-list.component");
var location_detail_component_1 = require("./common/location-detail.component");
var location_filter_pipe_1 = require("./common/location-filter.pipe");
var manual_list_component_1 = require("./equip/manual-list.component");
var manual_detail_component_1 = require("./equip/manual-detail.component");
var manual_filter_pipe_1 = require("./equip/manual-filter.pipe");
var tool_list_component_1 = require("./equip/tool-list.component");
var tool_detail_component_1 = require("./equip/tool-detail.component");
var tool_filter_pipe_1 = require("./equip/tool-filter.pipe");
var tool_filteritem_pipe_1 = require("./equip/tool-filteritem.pipe");
var tool_filterlocation_pipe_1 = require("./equip/tool-filterlocation.pipe");
/* Feature Modules */
// import { ProductModule } from './products/product.module';
//import { ManualModule } from './manuals/manual.module';
//import { AlertModule } from 'ng2-bootstrap';
//import { BsDropdownModule } from 'ng2-bootstrap';
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
            http_1.HttpModule,
            // [BsDropdownModule.forRoot([{dropdownMenu: DropdownMenu}] )],
            // [AlertModule.forRoot()]
            // ManualModule
            // ProductModule
            router_1.RouterModule.forRoot([
                { path: 'products', component: product_list_component_1.ProductListComponent },
                { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent },
                { path: 'locations', component: location_list_component_1.LocationListComponent },
                { path: 'location/:id', component: location_detail_component_1.LocationDetailComponent },
                { path: 'tools', component: tool_list_component_1.ToolListComponent },
                { path: 'tool/:id', component: tool_detail_component_1.ToolDetailComponent },
                { path: 'manuals', component: manual_list_component_1.ManualListComponent },
                { path: 'manual/:id', component: manual_detail_component_1.ManualDetailComponent },
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ], { useHash: false }),
        ],
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            //  YesNoComponent,
            product_list_component_1.ProductListComponent,
            product_detail_component_1.ProductDetailComponent,
            product_filter_pipe_1.ProductFilterPipe,
            location_list_component_1.LocationListComponent,
            location_detail_component_1.LocationDetailComponent,
            location_filter_pipe_1.LocationFilterPipe,
            manual_list_component_1.ManualListComponent,
            manual_detail_component_1.ManualDetailComponent,
            manual_filter_pipe_1.ManualFilterPipe,
            tool_list_component_1.ToolListComponent,
            tool_detail_component_1.ToolDetailComponent,
            tool_filter_pipe_1.ToolFilterPipe,
            tool_filteritem_pipe_1.ToolFilterItemPipe,
            tool_filterlocation_pipe_1.ToolFilterLocationPipe,
            star_component_1.StarComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map