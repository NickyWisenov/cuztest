import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-button',
  templateUrl: './job-button.component.html',
  styleUrls: ['./job-button.component.scss']
})
export class JobButtonComponent implements OnInit {
  @Input()
  job_type = ''
  @Input()
  dest = ''
  constructor() { }

  ngOnInit() {
  }

}
