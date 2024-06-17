import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MioiComponent } from './mioi.component';

describe('MioiComponent', () => {
  let component: MioiComponent;
  let fixture: ComponentFixture<MioiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MioiComponent]
    });
    fixture = TestBed.createComponent(MioiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
