import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { RouterModule} from '@angular/router';
import { ToolListComponent } from './tool-list.component';
import { ToolDetailComponent } from './tool-detail.component';
import { ToolFilterPipe } from './tool-filter.pipe';
import { ToolService } from './tool.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,     
    RouterModule.forChild([
      { path: 'tools', component: ToolListComponent },
      { path: 'tool/:id',
        component: ToolDetailComponent
      }
    ])
  ],
  declarations: [
    ToolListComponent,
    ToolDetailComponent,
    ToolFilterPipe
  //  ToolFilterItemPipe,
  //  ToolFilterLocationPipe,
  
  ],
  providers: [
    ToolService
  ]
})
export class ToolModule {}