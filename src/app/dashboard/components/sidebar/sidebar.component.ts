import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  active_sidemenu = 'find'
  constructor() { }

  ngOnInit() {
  }

  onClickHander(event: any) {
    event.preventDefault();
    var target = event.target || event.srcElement || event.currentTarget;
    this.active_sidemenu = target.dataset.sidemenu;
  }

}
