import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsButtonToggleService {

  isEditing = new BehaviorSubject(false);

  constructor() { }

  confimSettings(): void {
    this.isEditing.next(false);
  }

  addTiles(): void {
    this.isEditing.next(true);
  }

}
