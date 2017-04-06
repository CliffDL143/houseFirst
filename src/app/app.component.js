"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//import { HtmlDropdownComponent } from "./components/html-dropdown.component";
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Cliff Home Management';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'home-app',
        template: "\n        <div><h1>{{pageTitle}}</h1>\n            \n            <home-tools></home-tools>           \n        </div>\n\n     "
    })
], AppComponent);
exports.AppComponent = AppComponent;
/*


    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li class="btn btn-primary" style="height: 45px; color: white;"><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/manuals']">Manuals List</a></li>
               

               
               
               
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>


                    <li><a [routerLink]="['/products']">Product List</a></li>
                    <li><a [routerLink]="['/productEdit/0']">Add Product</a></li>


                    <li><a [routerLink]="['/manuals']">Manuals List</a></li>
                    <li><a [routerLink]="['/manualEdit/0']">Add Manual</a></li>

                    <li class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Library
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu" role="menu">
                            <li role="menuitem"><a href="#">Books</a></li>
                            <li role="menuitem"><a href="#">Music</a></li>
                            <li class="divider dropdown-divider"></li>
                            <li role="menuitem"><a href="#">Films</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">House
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu" role="menu">
                            <li role="menuitem"><a href="#">Tools</a></li>
                            <li role="menuitem"><a href="#">Manuals</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Food
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu" role="menu">
                            <li role="menuitem"><a href="#">Foods</a></li>
                            <li role="menuitem"><a href="#">Recipes</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Background
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu" role="menu">
                            <li role="menuitem"><a href="#">Locations</a></li>
                        </ul>
                    </li>

*/
//# sourceMappingURL=app.component.js.map