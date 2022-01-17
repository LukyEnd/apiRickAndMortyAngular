import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiLocationModel } from 'src/app/service/model/location.model';
import { ServiceLocationService } from 'src/app/service/service-location.service';

@Component({
	selector: 'app-read-location',
	templateUrl: './read-location.component.html',
	styleUrls: ['./read-location.component.scss', '../../base/base.component.scss'],
})
export class ReadLocationComponent implements OnInit {
	locationInfo!: ApiLocationModel;
	locationInfoError!: string;
	locationResidents!: [];

	isValid!: boolean;

	constructor(
		private serv: ServiceLocationService,
		private servLocation: ServiceLocationService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.dataUrlLocation();
		this.respLocation();
	}

	respLocation() {
		this.locationInfo = this.servLocation.getLocationInfo();
		if (this.locationInfo.id <= 999) {
			this.isValid = true;
		} else {
			this.isValid = false;
		}
	}

	dataUrlLocation() {
		const id = this.activatedRoute.snapshot.params.id;
		this.serv.locationUrl(id).subscribe(
			(data: ApiLocationModel) => {
				this.locationResidents = data.residents;
				this.locationInfo = data;
			},
			(erro: string) => {
				this.locationInfoError = erro;
			}
		);
	}
}
