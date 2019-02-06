import { Component, OnInit, ViewChild } from '@angular/core';
import * as md5 from 'js-md5';

import { ApiService } from 'src/app/core/http/api.service';
import {
  RootStoreState,
  PricemodelStoreActions
} from '../../../root-store'

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-doc-uploader',
  templateUrl: './doc-uploader.component.html',
  styleUrls: ['./doc-uploader.component.scss']
})
export class DocUploaderComponent implements OnInit {
  @ViewChild('file') file;
  show_modal = false;
  document_to_translate = null;

  document_title = '';
  detail_file_size = 0;
  detail_pages_count = 0;
  detail_word_count = 0;

  status_message = ['Uploading...', 'Upload Failed', 'Successfully Uploaded'];
  status = 0; // 0: none, 1: uploading, 2: failed, 3: success

  upload_url = ''; // Upload Url to the Google Cloud Storage

  doc_status: any = null;

  constructor(
    private apiService: ApiService,
    private store$: Store<RootStoreState.State>
  ) { }

  ngOnInit() {
    
  }

  onClickHandler(event: any) {
    event.preventDefault();
    this.show_modal = true;
  }

  onClickUpload(event: any) {
    this.file.nativeElement.click();
  }

  onFileAdded() {
    this.document_to_translate = this.file.nativeElement.files[0];
    console.log(this.document_to_translate);
    this.status = 1; // Uploading document
    this.document_title = this.document_to_translate.name;

    const request_to_upload = {
      "file_checksum": md5("File Upload"),
      "content_type": this.document_to_translate.type,
      "name": this.document_title,
      "language_code": "en"
    }

    // Create Job Document Instance to get Upload Url
    this.apiService.createJobDocument(request_to_upload).subscribe(
      data => {
        console.log(data);
        this.status = 3;
        this.upload_url = data.upload_url;
        this.uploadToStorage();
      },
      error => {
        console.log(error);
        this.status = 2;
      }
    )
  }

  // Upload Document to the Google Cloud Storage with url that is got from the Job Document Instance
  uploadToStorage() {
    this.apiService.uploadToStorage(this.upload_url, this.document_to_translate).subscribe(
      data => {
        console.log(data);

        //  Should Get File Id from the Response
        const fileId = data.fileId;
        // If success create setInterval for check status with job document ID
        this.doc_status = window.setInterval(this.checkStatusOfDoc(fileId), 3000);
        
        
      },
      error => {
        console.log(error);
      }
    )
  }
  
  // Check Status of the Document
  checkStatusOfDoc(fileId: any): any {
    this.apiService.checkStatusOfDoc(fileId).subscribe(
      data => {
        console.log(data); // Status of the Doc
        if (data == 'n/a') {
          window.clearInterval(this.doc_status);
          this.getDocument(fileId);
        } else {
          return;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  // Get Document Object with WordCount
  getDocument(fileId) {
    this.apiService.getDocument(fileId).subscribe(
      data => {
        console.log(data);
        // this.detail_word_count = data.word_count;
        this.detail_word_count = 1234;
        this.store$.dispatch(new PricemodelStoreActions.SET_WORD_COUNT({
          word_count: this.detail_word_count
        }));
      }
    )
  }

  // On Click Modal Done Button
  onClickModalDone() {
    this.show_modal = false;
  }

  // On Click Modal Cancel Button
  onClickModalCancel() {
    this.show_modal = false;
  }
  
}
 