import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './view/homepage/homepage.component';
import {BlanckPageComponent} from './view/blanck-page/blanck-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'blanck', component: BlanckPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
