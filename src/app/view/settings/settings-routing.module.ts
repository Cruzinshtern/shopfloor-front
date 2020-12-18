import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundSettingsComponent } from './background-settings/background-settings.component';
import { TileConfiguratorComponent } from './tile-configurator/tile-configurator.component';
import {SettingsComponent} from './settings.component';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {path: 'background-settings', component: BackgroundSettingsComponent},
      {path: 'tile-configuration', component: TileConfiguratorComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsRoutingModule { }
