import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorEnlacesComponent } from './editor-enlaces.component';

describe('EditorEnlacesComponent', () => {
  let component: EditorEnlacesComponent;
  let fixture: ComponentFixture<EditorEnlacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorEnlacesComponent]
    });
    fixture = TestBed.createComponent(EditorEnlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
