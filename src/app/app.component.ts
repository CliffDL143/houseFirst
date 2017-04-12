import { Component } from '@angular/core';

//import { HtmlDropdownComponent } from "./components/html-dropdown.component";
@Component({
    selector: 'home-app',

    template: `
        <div>
             <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class='navbar-brand' >{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink] = "['/welcome']">Home</a></li>
                        <li><a [routerLink] = "['/tools']">Tools</a></li>
                        <li><a [routerLink] = "['/manuals']">Manuals</a></li>   
                        <li><a [routerLink] = "['/locations']">Locations</a></li>                                            
                        <li class="dropdown"><a  class="dropdown-toggle"
                            data-toggle="dropdown" datahover="dropdown" data-close-others="true"
                            ><h4>Equipment</h4> <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a [routerLink] = "['/tools']">Tools</a></li>  
                                <li><a [routerLink] = "['/manuals']">Manuals</a></li>                                                      
                            </ul>

                        </li>   
                        <li><a  [routerLink] = "['/products']">Product</a></li>                     
                    </ul>
                </div>
             </nav>
             <div class='container'>
                <router-outlet></router-outlet>
            </div>
        </div>
     `

})  
export class AppComponent {
    pageTitle: string = 'Home Management';
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
