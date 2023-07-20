import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSayComponent } from './people-say.component';

describe('PeopleSayComponent', () => {
  let component: PeopleSayComponent;
  let fixture: ComponentFixture<PeopleSayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleSayComponent]
    });
    fixture = TestBed.createComponent(PeopleSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
