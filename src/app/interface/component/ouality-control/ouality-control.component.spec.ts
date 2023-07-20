import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OualityControlComponent } from './ouality-control.component';

describe('OualityControlComponent', () => {
  let component: OualityControlComponent;
  let fixture: ComponentFixture<OualityControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OualityControlComponent]
    });
    fixture = TestBed.createComponent(OualityControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
