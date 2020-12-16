import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

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

  onSelect(item): void {}

}
