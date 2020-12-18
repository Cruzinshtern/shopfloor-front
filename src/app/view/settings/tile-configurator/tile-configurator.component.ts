import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {SettingsApiService} from '../service/settings-api.service';


@Component({
  selector: 'app-tile-configurator',
  templateUrl: './tile-configurator.component.html',
  styleUrls: ['./tile-configurator.component.scss']
})
export class TileConfiguratorComponent implements OnInit {

  items;
  @ViewChild('monitoring', {static: true}) monitoring: TemplateRef<any>;


  constructor(
    private api: SettingsApiService
  ) { }

  ngOnInit(): void {
    this.api.getAllInfo().subscribe(
      response => {
        this.items = response;
      }
    );

  }


}
