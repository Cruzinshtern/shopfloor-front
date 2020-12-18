import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './view/homepage/homepage.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  // {
  //   path: 'settings',
  //   children: [
  //     {path: '', component: BackgroundSettingsComponent},
  //     {path: 'tile-configuration', component: TileConfiguratorComponent}
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
