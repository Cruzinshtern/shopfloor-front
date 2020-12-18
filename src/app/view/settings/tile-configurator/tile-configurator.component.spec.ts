import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileConfiguratorComponent } from './tile-configurator.component';

describe('TileConfiguratorComponent', () => {
  let component: TileConfiguratorComponent;
  let fixture: ComponentFixture<TileConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileConfiguratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
