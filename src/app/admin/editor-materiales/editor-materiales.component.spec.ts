import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorMaterialesComponent } from './editor-materiales.component';

describe('EditorMaterialesComponent', () => {
  let component: EditorMaterialesComponent;
  let fixture: ComponentFixture<EditorMaterialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorMaterialesComponent]
    });
    fixture = TestBed.createComponent(EditorMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
