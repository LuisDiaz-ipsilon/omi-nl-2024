import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-nln',
  templateUrl: './nln.component.html',
  styleUrls: ['./nln.component.scss'],
})
export class NlnComponent implements OnInit {
  title: string = 'Test ';
  description: string = 'Test ';

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.title = this.contentService.getTitleNln();
    this.description = this.contentService.getDescriptionNln();
  }


}
