import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input()
  items: { display: string, [key: string]: any }[] = [];

  isDropdownActive = false;

  @Output()
  selectItem = new EventEmitter();

  constructor() { }

  toggleDropdown(): void {
    this.isDropdownActive = !this.isDropdownActive;
  }

  onSelect(item): void {
    this.selectItem.emit(item);
    this.toggleDropdown();
  }
}
