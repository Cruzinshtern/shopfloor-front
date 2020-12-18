import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

   items: any = [
    {
      image: 'image',
      name: 'Condition Monitoring',
      description: 'Lorem Ipsum dolor met',
      app_url: '#',
      icon_url: 'some url',
      tile_color: 'some color',
      tile_text_color: 'some color'
    },
    {
      image: 'image',
      name: 'Asset Manager',
      description: '',
      app_url: '#',
      icon_url: 'some url',
      tile_color: 'some color',
      tile_text_color: 'some color'
    },
    {
      image: 'image',
      name: 'Asset Manager',
      description: '',
      app_url: '#',
      icon_url: 'some url',
      tile_color: 'some color',
      tile_text_color: 'some color'
    },
    {
      image: 'image',
      name: 'Asset Manager',
      description: '',
      app_url: '#',
      icon_url: 'some url',
      tile_color: 'some color',
      tile_text_color: 'some color'
    },
    {
      image: 'image',
      name: 'Asset Manager',
      description: '',
      app_url: '#',
      icon_url: 'some url',
      tile_color: 'some color',
      tile_text_color: 'some color'
    },
  ];

  constructor() { }

  getAllInfo(): Observable<any> {
    return of (this.items);
  }
}
