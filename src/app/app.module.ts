import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//start up
import { AppComponent }  from './app.component';
//Components
// import { WelcomeComponent } from './startup/welcome.component';
//import { YesNoComponent } from './shared/yesno.component';
//common
import { LocationListComponent } from './common/location-list.component';
import { LocationFilterPipe } from  './common/location-filter.pipe';
import { ManualListComponent } from './equip/manual-list.component';
import { ManualFilterPipe } from './equip/manual-filter.pipe';
import { ToolListComponent } from './equip/tool-list.component';
import { ToolFilterPipe } from './equip/tool-filter.pipe';
//Lobrary




//import { AlertModule } from 'ng2-bootstrap';
//import { BsDropdownModule } from 'ng2-bootstrap';


/* Feature Modules */
//import { ProductModule } from './products/product.module';
//import { ManualModule } from './manuals/manual.module';




function yn (value: number) {
    return (value === -1) ? 'Yes' : 'No';
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
   // [BsDropdownModule.forRoot([{dropdownMenu: DropdownMenu}] )],
    // [AlertModule.forRoot()],
 /*   RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }

    ]),*/
    //ProductModule,
   // ManualModule
  ],
  declarations: [
    AppComponent,
  //  WelcomeComponent,
  //  YesNoComponent,
    LocationListComponent, 
    ManualListComponent,
    ToolListComponent,
    LocationFilterPipe,    
    ManualFilterPipe,
    ToolFilterPipe


  ],
  bootstrap: [ AppComponent ]
})



export class AppModule { }
