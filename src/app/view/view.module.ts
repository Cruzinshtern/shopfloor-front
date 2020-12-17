import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageItemComponent } from './homepage-item/homepage-item.component';
import { SharedModule} from '../shared/shared.module';
import { BlanckPageComponent } from './blanck-page/blanck-page.component';
import { RouterModule } from '@angular/router';




@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomepageComponent
  ],

  declarations: [HomepageComponent, HomepageItemComponent, BlanckPageComponent]
})
export class ViewModule { }
