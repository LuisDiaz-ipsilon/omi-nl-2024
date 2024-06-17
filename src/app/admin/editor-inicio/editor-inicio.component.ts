import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-editor-inicio',
  templateUrl: './editor-inicio.component.html',
  styleUrls: ['./editor-inicio.component.scss']
})
export class EditorInicioComponent {

  contentFormNln: FormGroup;

  constructor(public contentService: ContentService,
    private fb: FormBuilder,
  ) {
    this.contentFormNln = this.fb.group({
      titleNln: [this.contentService.getTitleNln()],
      descriptionNln: [this.contentService.getDescriptionNln()]
    });
  }

  onSubmitNln(): void {
    const formValue = this.contentFormNln.value;
    this.contentService.updateContentNln(formValue.titleNln, formValue.descriptionNln);
  }
}
