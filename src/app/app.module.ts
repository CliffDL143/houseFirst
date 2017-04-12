import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//start up
import { AppComponent }  from './app.component';
//Components
 import { WelcomeComponent } from './startup/welcome.component';
 import { StarComponent } from './shared/star.component';
//import { YesNoComponent } from './shared/yesno.component';



/* Feature Modules */
  import { ProductModule } from './products/product.module';
  import { LocationModule } from './common/location.module';
  import { ManualModule } from './equip/manual.module';
  import { ToolModule } from './equip/tool.module';
//import { AlertModule } from 'ng2-bootstrap';
//import { BsDropdownModule } from 'ng2-bootstrap';




function yn (value: number) {
    return (value === -1) ? 'Yes' : 'No';
}

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
   // [BsDropdownModule.forRoot([{dropdownMenu: DropdownMenu}] )],
    // [AlertModule.forRoot()]
    ManualModule,
    LocationModule,
    ProductModule,
    ToolModule,
    RouterModule.forRoot([       
      { path: 'welcome', component: WelcomeComponent },      
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }

    ], { useHash: false }),
 
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    StarComponent
  //  YesNoComponent,


  ],
  bootstrap: [ AppComponent ]
})



export class AppModule { }
