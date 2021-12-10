import { ApiLocationModel } from '../model/location.model';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locationSuccess!: ApiLocationModel[];
  locationError!: string;
  currentUrl!: string;

  constructor(private serv: ServiceService) { }

  ngOnInit(): void {
    this.locationInfo()
  }

  locationInfo() {
    this.serv.apiLocationInfo()
      .subscribe(data => {
        this.locationSuccess = data
        this.currentUrl = 'https://rickandmortyapi.com/api/character'
        console.log('Data', data)
      }, error => {
        this.locationError = error
      })
  }

  pageNextInfo() {
    this.serv.apiPageInfo(this.currentUrl)
      .subscribe(pageInfo => {
        this.currentUrl = pageInfo.next;
        this.serv.buttonPageLocation(pageInfo.next)
          .subscribe(data => {
            this.locationSuccess = data;
          })
      }, erro => {
        this.locationError = erro
      })
  }

  pagePrevInfo() {
    this.serv.apiPageInfo(this.currentUrl)
      .subscribe(pageInfo => {
        this.currentUrl = pageInfo.prev
        this.serv.buttonPageLocation(pageInfo.prev)
          .subscribe(data => {
            this.locationSuccess = data;
          })
      }, erro => {
        this.locationError = erro
      })
  }

}
