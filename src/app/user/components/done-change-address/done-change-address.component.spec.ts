import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneChangeAddressComponent } from './done-change-address.component';

describe('DoneChangeAddressComponent', () => {
  let component: DoneChangeAddressComponent;
  let fixture: ComponentFixture<DoneChangeAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoneChangeAddressComponent]
    });
    fixture = TestBed.createComponent(DoneChangeAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
