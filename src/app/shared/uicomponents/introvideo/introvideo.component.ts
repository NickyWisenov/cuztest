import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-introvideo',
  templateUrl: './introvideo.component.html',
  styleUrls: ['./introvideo.component.scss']
})
export class IntrovideoComponent implements OnInit {
    @Input()
    isWatch = false;
    @Input()
    public onClickClose: Function;

    videosource = "https://www.youtube.com/embed/cJ58Z1568lc";
    constructor() { }

    ngOnInit() {
    }
}
