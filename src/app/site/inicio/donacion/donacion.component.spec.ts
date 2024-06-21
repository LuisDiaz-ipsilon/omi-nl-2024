import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionComponent } from './donacion.component';

describe('DonacionComponent', () => {
  let component: DonacionComponent;
  let fixture: ComponentFixture<DonacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonacionComponent]
    });
    fixture = TestBed.createComponent(DonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
