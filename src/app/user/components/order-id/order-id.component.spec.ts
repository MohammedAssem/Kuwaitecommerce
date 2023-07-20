import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderIDComponent } from './order-id.component';

describe('OrderIDComponent', () => {
  let component: OrderIDComponent;
  let fixture: ComponentFixture<OrderIDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderIDComponent]
    });
    fixture = TestBed.createComponent(OrderIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
