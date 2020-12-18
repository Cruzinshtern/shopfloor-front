import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageItemComponent } from './homepage-item/homepage-item.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsModule } from './settings/settings.module';




@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    SettingsModule
  ],
  exports: [
    HomepageComponent,
    SettingsModule
  ],

  declarations: [
    HomepageComponent,
    HomepageItemComponent,
  ]
})
export class ViewModule { }
