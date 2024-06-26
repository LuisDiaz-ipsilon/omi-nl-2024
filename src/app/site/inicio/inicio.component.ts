import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  content = '';
  URL =
    'https://firebasestorage.googleapis.com/v0/b/ss-omi.appspot.com/o/SS-INFO-OMI.txt';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchContent();
  }

  fetchContent() {
    this.http.get(this.URL, { responseType: 'text' }).subscribe(
      (data) => (this.content = data),
      (error) => console.error('Error fetching content:', error)
    );
  }
}
