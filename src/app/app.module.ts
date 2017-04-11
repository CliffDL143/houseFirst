import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//start up
import { AppComponent }  from './app.component';
//Components
 import { WelcomeComponent } from './startup/welcome.component';
//import { YesNoComponent } from './shared/yesno.component';

//test
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
//common
import { StarComponent } from './shared/star.component';
//Library
import { LocationListComponent } from './common/location-list.component';
import { LocationDetailComponent } from './common/location-detail.component';
import { LocationFilterPipe } from  './common/location-filter.pipe';
import { ManualListComponent } from './equip/manual-list.component';
import { ManualDetailComponent } from './equip/manual-detail.component';
import { ManualFilterPipe } from './equip/manual-filter.pipe';
import { ToolListComponent } from './equip/tool-list.component';
import { ToolDetailComponent } from './equip/tool-detail.component';
import { ToolFilterPipe } from './equip/tool-filter.pipe';
import { ToolFilterItemPipe } from './equip/tool-filteritem.pipe';
import { ToolFilterLocationPipe } from './equip/tool-filterlocation.pipe';

/* Feature Modules */
// import { ProductModule } from './products/product.module';
//import { ManualModule } from './manuals/manual.module';

//import { AlertModule } from 'ng2-bootstrap';
//import { BsDropdownModule } from 'ng2-bootstrap';




function yn (value: number) {
    return (value === -1) ? 'Yes' : 'No';
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   // [BsDropdownModule.forRoot([{dropdownMenu: DropdownMenu}] )],
    // [AlertModule.forRoot()]
   // ManualModule
  // ProductModule
    RouterModule.forRoot([ 
      { path: 'products', component: ProductListComponent },  
      { path: 'product/:id', component: ProductDetailComponent }, 
      { path: 'locations', component: LocationListComponent },  
      { path: 'location/:id', component: LocationDetailComponent },       
      { path: 'tools', component: ToolListComponent },  
      { path: 'tool/:id', component: ToolDetailComponent }, 
      { path: 'manuals', component: ManualListComponent },  
      { path: 'manual/:id', component: ManualDetailComponent },      
      { path: 'welcome', component: WelcomeComponent },      
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }

    ], { useHash: false }),
 
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
  //  YesNoComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,

    LocationListComponent, 
    LocationDetailComponent,   
    LocationFilterPipe,

    ManualListComponent,
    ManualDetailComponent,    
    ManualFilterPipe,

    ToolListComponent,
    ToolDetailComponent, 
    ToolFilterPipe,
    ToolFilterItemPipe,
    ToolFilterLocationPipe,

    StarComponent
  ],
  bootstrap: [ AppComponent ]
})



export class AppModule { }
