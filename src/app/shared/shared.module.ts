import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MonitoringComponent } from './icons/monitoring/monitoring.component';
import { BookletComponent } from './icons/booklet/booklet.component';
import { DocumentsComponent } from './icons/documents/documents.component';
import { ServiceComponent } from './icons/service/service.component';
import { TimelineComponent } from './icons/timeline/timeline.component';
import { MaintenanceComponent } from './icons/maintenance/maintenance.component';
import { WebshopComponent } from './icons/webshop/webshop.component';
import { ConfiguratorComponent } from './icons/configurator/configurator.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MonitoringComponent, BookletComponent, DocumentsComponent, ServiceComponent, TimelineComponent, MaintenanceComponent, WebshopComponent, ConfiguratorComponent, DropdownComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    MonitoringComponent,
    BookletComponent,
    DocumentsComponent,
    ServiceComponent,
    TimelineComponent,
    MaintenanceComponent,
    WebshopComponent,
    ConfiguratorComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
