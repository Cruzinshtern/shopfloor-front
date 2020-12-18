import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tile-configurator-item',
  templateUrl: './tile-configurator-item.component.html',
  styleUrls: ['./tile-configurator-item.component.scss']
})
export class TileConfiguratorItemComponent implements OnInit {

  @Input() item;
  @Input() icon: TemplateRef<any>;
  configuratorForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.configuratorForm = this.fb.group({
      tile_name: new FormControl(this.item.name),
      app_url: new FormControl(this.item.app_url),
      tile_color: new FormControl(this.item.tile_color),
      description: new FormControl(this.item.description),
      icon_url: new FormControl(this.item.icon_url),
      tile_text_color: new FormControl(this.item.tile_text_color)
    });
  }

}
