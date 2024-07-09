import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorExamenesComponent } from './editor-examenes.component';

describe('EditorExamenesComponent', () => {
  let component: EditorExamenesComponent;
  let fixture: ComponentFixture<EditorExamenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorExamenesComponent]
    });
    fixture = TestBed.createComponent(EditorExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
