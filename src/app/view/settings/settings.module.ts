import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundSettingsComponent } from './background-settings/background-settings.component';
import { TileConfiguratorComponent } from './tile-configurator/tile-configurator.component';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsNavbarComponent } from './settings-navbar/settings-navbar.component';
import {SettingsComponent} from './settings.component';
import {TileConfiguratorItemComponent} from './tile-configurator/tile-configurator-item/tile-configurator-item.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    SettingsComponent,
    BackgroundSettingsComponent,
    TileConfiguratorComponent,
    SettingsNavbarComponent,
    TileConfiguratorItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    BackgroundSettingsComponent,
    TileConfiguratorComponent
  ]
})
export class SettingsModule { }
