import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';
import { SettingsButtonToggleService } from '../service/settings-button-toggle.service';

@Component({
  selector: 'app-settings-navbar',
  templateUrl: './settings-navbar.component.html',
  styleUrls: ['./settings-navbar.component.scss']
})
export class SettingsNavbarComponent implements OnInit {
  @ContentChild('right', { static: true }) public rightTemplate: TemplateRef<any>;

  constructor(
    public toggleService: SettingsButtonToggleService
  ) { }

  ngOnInit(): void {
  }

  onGenSetClick(): void {
    this.toggleService.confimSettings();
    console.log(this.toggleService.isEditing.getValue());
  }

  onTilConClick(): void {
    this.toggleService.addTiles();
    console.log(this.toggleService.isEditing.getValue());
  }

}
