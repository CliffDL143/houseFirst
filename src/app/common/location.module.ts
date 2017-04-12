import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { RouterModule} from '@angular/router';

import { LocationListComponent } from './location-list.component';
import { LocationDetailComponent } from './location-detail.component';
import { LocationFilterPipe } from './location-filter.pipe';
import { LocationService } from './location.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,      
    RouterModule.forChild([
      { path: 'locations', component: LocationListComponent },
      { path: 'location/:id',
        component: LocationDetailComponent
      }
    ])
  ],
  declarations: [
    LocationListComponent,
    LocationDetailComponent,
    LocationFilterPipe
  ],
  providers: [
    LocationService
  ]
})
export class LocationModule {}
