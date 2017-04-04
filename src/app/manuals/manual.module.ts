import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ManualData }  from './manual-data';

import { ManualListComponent } from './manual-list.component';
import { ManualDetailComponent } from './manual-detail.component';
import { ManualDetailGuard, ManualEditGuard } from './manual-guard.service';
import { ManualEditComponent } from './manual-edit.component';

import { ManualFilterPipe } from './manual-filter.pipe';
import { ManualService } from './manual.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ManualData),
    RouterModule.forChild([
      { path: 'manuals', component: ManualListComponent },
      { path: 'manual/:id',
        canActivate: [ ManualDetailGuard],
        component: ManualDetailComponent
      },
      { path: 'manualEdit/:id',
        canDeactivate: [ ManualEditGuard ],
        component: ManualEditComponent },
    ])
  ],
  declarations: [
    ManualListComponent,
    ManualDetailComponent,
    ManualEditComponent,
    ManualFilterPipe
  ],
  providers: [
    ManualService,
    ManualDetailGuard,
    ManualEditGuard
  ]
})
export class ManualModule {}
