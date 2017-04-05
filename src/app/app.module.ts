import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
// import { WelcomeComponent } from './startup/welcome.component';
import { ManualListComponent } from './equip/manual-list.component';
import { ToolListComponent } from './equip/tool-list.component';

//import { AlertModule } from 'ng2-bootstrap';
//import { BsDropdownModule } from 'ng2-bootstrap';


/* Feature Modules */
//import { ProductModule } from './products/product.module';
//import { ManualModule } from './manuals/manual.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
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
    ManualListComponent,
    ToolListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
