import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileConfiguratorItemComponent } from './tile-configurator-item.component';

describe('TileConfiguratorItemComponent', () => {
  let component: TileConfiguratorItemComponent;
  let fixture: ComponentFixture<TileConfiguratorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileConfiguratorItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileConfiguratorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
