import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlnComponent } from './nln.component';

describe('NlnComponent', () => {
  let component: NlnComponent;
  let fixture: ComponentFixture<NlnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NlnComponent]
    });
    fixture = TestBed.createComponent(NlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
