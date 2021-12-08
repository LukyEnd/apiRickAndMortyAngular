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

  constructor(private serv: ServiceService) { }

  ngOnInit(): void {
    this.locationInfo()
  }

  locationInfo() {
    this.serv.apiLocationInfo()
      .subscribe(data => {
        this.locationSuccess = data
        console.log('Data', data)
      }, error => {
        this.locationError = error
      })
  }

}
