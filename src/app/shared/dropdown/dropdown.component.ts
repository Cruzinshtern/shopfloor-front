import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input()
  items = [];

  isDropdownActive = false;

  @Output()
  selectItem = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  toggleDropdown(): void {
    this.isDropdownActive = !this.isDropdownActive;
  }

  onSelect(item): void {
    this.selectItem.emit(item);
    this.router.navigate([item.path]);
    this.toggleDropdown();
  }
}
