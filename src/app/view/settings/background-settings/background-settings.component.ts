import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SettingsNavbarComponent } from '../settings-navbar/settings-navbar.component';

@Component({
  selector: 'app-background-settings',
  templateUrl: './background-settings.component.html',
  styleUrls: ['./background-settings.component.scss']
})
export class BackgroundSettingsComponent implements OnInit {

  settingsForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.settingsForm = this.fb.group({
      prm_color: new FormControl ('#0090D4'),
      bcg_color: new FormControl('#EFEFEF'),
      bcg_image: new FormControl('https://www.elunic.com/shopfloor-io/bg.jpg')
    })
  }

}
