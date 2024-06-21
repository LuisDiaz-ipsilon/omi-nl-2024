import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorGaleriaComponent } from './editor-galeria.component';

describe('EditorGaleriaComponent', () => {
  let component: EditorGaleriaComponent;
  let fixture: ComponentFixture<EditorGaleriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorGaleriaComponent]
    });
    fixture = TestBed.createComponent(EditorGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
