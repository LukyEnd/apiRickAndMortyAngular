import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceCharacterService } from 'src/app/service/service-character.service';
import { ServiceLocationService } from 'src/app/service/service-location.service';
import { ServicePageInfoService } from 'src/app/service/service-page-info.service';
import { ApiLocationModel } from '../../service/model/location.model';
import { ListCharacterComponent } from '../character/list-character/list-character.component';

@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss', '../base/base.component.scss'],
})
export class LocationComponent implements OnInit {
	locationSuccess!: ApiLocationModel[];
	locationError!: string;
	currentUrl!: string;

	constructor(
		private serv: ServiceLocationService,
		private servChar: ServiceCharacterService,
		private resp: ServicePageInfoService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.locationInfo();
	}

	locationInfo() {
		this.serv.apiLocationInfo().subscribe(
			(data) => {
				this.locationSuccess = data;
				this.currentUrl = 'https://rickandmortyapi.com/api/location';
			},
			(error) => {
				this.locationError = error;
			}
		);
	}

	pageNextInfo() {
		this.resp.apiPageInfo(this.currentUrl).subscribe(
			(pageInfo) => {
				this.currentUrl = pageInfo.next;
				this.serv.buttonPageLocation(pageInfo.next).subscribe((data) => {
					this.locationSuccess = data;
				});
			},
			(erro) => {
				this.locationError = erro;
			}
		);
	}

	pagePrevInfo() {
		this.resp.apiPageInfo(this.currentUrl).subscribe(
			(pageInfo) => {
				this.currentUrl = pageInfo.prev;
				this.serv.buttonPageLocation(pageInfo.prev).subscribe((data) => {
					this.locationSuccess = data;
				});
			},
			(erro) => {
				this.locationError = erro;
			}
		);
	}

	openList(characterList: []) {
		this.dialog.open(ListCharacterComponent);
		return this.servChar.setCharacterList(characterList);
	}
}
