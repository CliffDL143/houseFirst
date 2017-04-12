import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { RouterModule} from '@angular/router';

import { ManualListComponent } from './manual-list.component';
import { ManualDetailComponent } from './manual-detail.component';
import { ManualFilterPipe } from './manual-filter.pipe';
import { ManualService } from './manual.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'manuals', component: ManualListComponent },
      { path: 'manual/:id',
        component: ManualDetailComponent
      }
    ])
  ],
  declarations: [
    ManualListComponent,
    ManualDetailComponent,
    ManualFilterPipe
  ],
  providers: [
    ManualService
  ]
})
export class ManualModule {}