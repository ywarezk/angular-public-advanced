/**
 * This directive will help us with file upload
 * https://academeez-file-upload.herokuapp.com/api/file
 <form>
    <input
      (progress)="printProgress($event)"
      type="file"
      multiple
      taUpload="https://academeez-file-upload.herokuapp.com/api/file" />
 </form>
 */

import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpProgressEvent, HttpEventType } from '@angular/common/http';
import { filter } from 'rxjs/operators';

@Directive({
  selector: 'input[type="file"][taUpload]'
})
export class UploadDirective {
  @Input('taUpload')
  serverUrl: string;

  @Output('progress')
  progress: EventEmitter<number> = new EventEmitter();

  constructor(private _http: HttpClient) { }

  @HostListener('change', ['$event'])
  filePicked(event) {
    // we can grab the files and upload them to our server

    const input: HTMLInputElement = event.target;
    const files = input.files;
    if (files.length === 0) return;

    const body = new FormData();
    body.append('file', files[0]);

    this._http.post(this.serverUrl, body, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      filter((event) => event.type === HttpEventType.UploadProgress)
    ).subscribe((event: HttpProgressEvent) => {
      this.progress.emit(Math.floor(event.loaded / event.total * 100));
    });
  }
}
