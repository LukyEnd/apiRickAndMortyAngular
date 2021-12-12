import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../../pages/base/base.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() pageNextInfo: any;
  @Input() pagePrevInfo: any;

  constructor() { }
  ngOnInit(): void {
  }
}
