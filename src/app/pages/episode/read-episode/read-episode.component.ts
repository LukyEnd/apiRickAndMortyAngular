import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ApiCharacterModel } from 'src/app/service/model/character.model';
import { ServiceCharacterService } from 'src/app/service/service-character.service';
import { ServiceEpisodeService } from 'src/app/service/service-episode.service';
import { ReadCharacterComponent } from '../../character/read-character/read-character.component';
import { ApiEpisodeModel } from './../../../service/model/episode.model';

@Component({
	selector: 'app-read-episode',
	templateUrl: './read-episode.component.html',
	styleUrls: ['./read-episode.component.scss', '../../base/base.component.scss'],
})
export class ReadEpisodeComponent implements OnInit {
	episodeInfo!: ApiEpisodeModel;
	episodeInfoError!: string;

	charUrlDate!: ApiCharacterModel;

	isValid!: boolean;

	constructor(
		private serv: ServiceEpisodeService,
		private activatedRoute: ActivatedRoute,
		private resp: ServiceCharacterService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.dataUrlEpisode();
		this.respEpisode();
	}

	respEpisode() {
		this.episodeInfo = this.serv.getEpidoseInfo();
		if (this.episodeInfo.id <= 999) {
			this.isValid = true;
		} else {
			this.isValid = false;
		}
	}

	dataUrlEpisode() {
		const id = this.activatedRoute.snapshot.params.id;
		this.serv.episodeUrl(id).subscribe(
			(data: ApiEpisodeModel) => {
				this.episodeInfo = data;
			},
			(erro: string) => {
				this.episodeInfoError = erro;
			}
		);
	}

	openDialog(characterURL: string) {
		let index = characterURL.indexOf('/character/');
		let id = characterURL.substring(index + 11);
		this.resp.characterUrl(id).subscribe((data) => {
			this.charUrlDate = data;
			this.dialog.open(ReadCharacterComponent);
			return this.resp.setCharacterInfo(this.charUrlDate);
		});
	}
}
