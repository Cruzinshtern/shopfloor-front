import { Component, OnInit, TemplateRef } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-homepage-item',
  templateUrl: './homepage-item.component.html',
  styleUrls: ['./homepage-item.component.scss']
})
export class HomepageItemComponent implements OnInit {
  @Input() item;
  @Input() icon: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
