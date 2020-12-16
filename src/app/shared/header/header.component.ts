import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private router: Router
  ) { }

  items = [
    {
      display: 'Hub settings',
      path: '/blanck'
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

  onSelect(item): void {
    this.router.navigate([item.path]);
  }

}
