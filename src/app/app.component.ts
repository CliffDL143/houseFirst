import { Component } from '@angular/core';
import { LocationService } from './common/location.service'
import { ManualService } from './equip/manual.service';
import { ToolService } from './equip/tool.service';
//import { HtmlDropdownComponent } from "./components/html-dropdown.component";



@Component({
    selector: 'home-app',

    template: `
        <div><h1>{{pageTitle}}</h1>
            <home-tools></home-tools>

        </div>

     `,
     providers: [ 
         LocationService,
         ManualService,
         ToolService ]
})  
//          <home-products></home-products>
//            <home-locations></home-locations>   
//            <home-manuals></home-manuals>
 //           <home-tools></home-tools>  

export class AppComponent {
    pageTitle: string = 'Cliff Home Management';
}

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
