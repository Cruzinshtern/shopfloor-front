import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router
  ) { }

  items = [
    {
      display: 'Hub settings',
      path: '/settings/background-settings'
    },
    {
      display: 'User management',
      path: ''
    },
    {
      display: 'Asset management',
      path: ''
    }
  ];

  profileItems = [
    {
      display: 'Profil',
      path: ''
    },
    {
      display: 'Logout',
      path: ''
    },
  ];

  onSelect(item): void {
    this.router.navigate([item.path]);
  }

}
