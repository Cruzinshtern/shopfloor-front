import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanckPageComponent } from './blanck-page.component';

describe('BlanckPageComponent', () => {
  let component: BlanckPageComponent;
  let fixture: ComponentFixture<BlanckPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlanckPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlanckPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
