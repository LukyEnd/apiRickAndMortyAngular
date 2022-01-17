import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiLocationModel } from 'src/app/service/model/location.model';
import { ServiceCharacterService } from 'src/app/service/service-character.service';
import { ServiceEpisodeService } from 'src/app/service/service-episode.service';
import { ServiceLocationService } from 'src/app/service/service-location.service';
import { ApiCharacterModel } from '../../../service/model/character.model';
import { ListEpisodeComponent } from '../../episode/list-episode/list-episode.component';
import { ReadLocationComponent } from '../../location/read-location/read-location.component';

@Component({
	selector: 'app-read-character',
	templateUrl: './read-character.component.html',
	styleUrls: ['./read-character.component.scss', '../../base/base.component.scss'],
})
export class ReadCharacterComponent implements OnInit {
	charSuccess!: ApiCharacterModel;

	locationUrlDate!: ApiLocationModel;

	constructor(
		private serv: ServiceCharacterService,
		private servLocation: ServiceLocationService,
		private dialog: MatDialog,
		private resp: ServiceEpisodeService
	) {}

	ngOnInit(): void {
		this.respCharacter();
	}

	respCharacter() {
		this.charSuccess = this.serv.getCharacterInfo();
	}

	openDialog(locationUrl: string) {
		let index = locationUrl.indexOf('/location/');
		let id = locationUrl.substring(index + 10);
		this.servLocation.locationUrl(id).subscribe((data) => {
			this.locationUrlDate = data;
			this.dialog.open(ReadLocationComponent);
			return this.servLocation.setLocationInfo(this.locationUrlDate);
		});
	}

	openList(listEpisode: []) {
		this.dialog.open(ListEpisodeComponent);
		return this.resp.setEpisodeList(listEpisode);
	}
}
