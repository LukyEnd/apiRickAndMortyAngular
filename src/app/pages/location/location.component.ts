import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceCharacterService } from 'src/app/service/service-character.service';
import { ServiceLocationService } from 'src/app/service/service-location.service';
import { ServicePageInfoService } from 'src/app/service/service-page-info.service';
import { environment } from 'src/environments/environment.prod';
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

	buttonPrevNull: boolean = false;
	buttonNextNull: boolean = true;

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
				this.currentUrl = `${environment.url}location`;
			},
			(error) => {
				this.locationError = error;
			}
		);
	}

	pagePrevInfo() {
		this.resp.apiPageInfo(this.currentUrl).subscribe(
			(pageInfo) => {
				let index = pageInfo.prev.indexOf('page=');
				let id = pageInfo.prev.substring(index + 5);
				if (pageInfo.prev == null || id == '1') {
					this.buttonPrevNull = false;
					this.currentUrl = `${environment.url}location`;
				} else {
					this.buttonNextNull = true;
					this.currentUrl = pageInfo.prev;
				}
				this.serv.buttonPageLocation(pageInfo.prev).subscribe((data) => {
					this.locationSuccess = data;
				});
			},
			(erro) => {
				this.locationError = erro;
			}
		);
	}

	pageNextInfo() {
		this.resp.apiPageInfo(this.currentUrl).subscribe(
			(pageInfo) => {
				let index = pageInfo.next.indexOf('page=');
				let id = pageInfo.next.substring(index + 5);
				if (pageInfo.next == null || id == `${pageInfo.pages}`) {
					this.currentUrl = pageInfo.next;
					this.buttonNextNull = false;
				} else {
					this.buttonPrevNull = true;
					this.currentUrl = pageInfo.next;
				}
				this.serv.buttonPageLocation(pageInfo.next).subscribe((data) => {
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
