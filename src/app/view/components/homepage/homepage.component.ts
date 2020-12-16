import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @ViewChild('monitoring', {static: true}) monitoring: TemplateRef<any>;
  @ViewChild('booklet', {static: true}) booklet: TemplateRef<any>;
  @ViewChild('documents', {static: true}) documents: TemplateRef<any>;
  @ViewChild('service', {static: true}) service: TemplateRef<any>;
  @ViewChild('timeline', {static: true}) timeline: TemplateRef<any>;
  @ViewChild('maintenance', {static: true}) maintenance: TemplateRef<any>;
  @ViewChild('webshop', {static: true}) webshop: TemplateRef<any>;
  @ViewChild('configurator', {static: true}) configurator: TemplateRef<any>;

  items;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        image: this.monitoring,
        name: 'Condition Monitoring',
        description: 'Lorem Ipsum dolor met'
      },
      {
        image: this.booklet,
        name: 'Service Booklet',
        description: 'Lorem Ipsum dolor met'
      },
      {
        image: this.documents,
        name: 'Documents',
        description: 'Lorem Ipsum dolor met'
      },
      {
        image: this.service,
        name: 'Service',
        description: 'Lorem Ipsum dolor met'
      },
      {
        image: this.timeline,
        name: 'Timeline',
        description: 'Lorem Ipsum dolor met'
      },
      {
        image: this.maintenance,
        name: 'Maintenance',
        description: 'Lorem Ipsum dolor met'
      },
      {
        image: this.webshop,
        name: 'Webshop',
        description: 'Lorem Ipsum dolor met'
      },
      {
        image: this.configurator,
        name: 'Configurator',
        description: 'Lorem Ipsum dolor met'
      }
    ];
  }

}
