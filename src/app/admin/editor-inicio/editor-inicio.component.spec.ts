import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorInicioComponent } from './editor-inicio.component';

describe('EditorInicioComponent', () => {
  let component: EditorInicioComponent;
  let fixture: ComponentFixture<EditorInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorInicioComponent]
    });
    fixture = TestBed.createComponent(EditorInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
