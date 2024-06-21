import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Editor } from 'ngx-editor';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-editor-inicio',
  templateUrl: './editor-inicio.component.html',
  styleUrls: ['./editor-inicio.component.scss'],
})
export class EditorInicioComponent implements OnInit, OnDestroy {
  editor!: Editor;
  html = '';

  ngOnInit(): void {
    this.editor = new Editor();

    this.contentService.currentContent.subscribe(
      (content) => (this.html = content)
    );
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  onContentChange(): void {
    this.contentService.updateContent(this.html);
  }

  contentFormNln: FormGroup;

  constructor(public contentService: ContentService, private fb: FormBuilder) {
    this.contentFormNln = this.fb.group({
      titleNln: [this.contentService.getTitleNln()],
      descriptionNln: [this.contentService.getDescriptionNln()],
    });
  }

  onSubmitNln(): void {
    const formValue = this.contentFormNln.value;
    this.contentService.updateContentNln(
      formValue.titleNln,
      formValue.descriptionNln
    );
  }
}
