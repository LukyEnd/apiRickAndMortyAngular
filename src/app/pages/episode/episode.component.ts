import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceCharacterService } from 'src/app/service/service-character.service';
import { ServiceEpisodeService } from 'src/app/service/service-episode.service';
import { ServicePageInfoService } from 'src/app/service/service-page-info.service';
import { ApiEpisodeModel } from '../../service/model/episode.model';
import { ListCharacterComponent } from '../character/list-character/list-character.component';

@Component({
	selector: 'app-episode',
	templateUrl: './episode.component.html',
	styleUrls: ['./episode.component.scss', '../base/base.component.scss'],
})
export class EpisodeComponent implements OnInit {
	episodeSuccess!: ApiEpisodeModel[];
	episodeError!: string;
	currentUrl!: string;

	constructor(
		private serv: ServiceEpisodeService,
		private servChar: ServiceCharacterService,
		private resp: ServicePageInfoService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.episodeInfo();
	}

	episodeInfo() {
		this.serv.apiEpisodeInfo().subscribe(
			(data) => {
				this.episodeSuccess = data;
				this.currentUrl = 'https://rickandmortyapi.com/api/episode';
			},
			(error) => {
				this.episodeError = error;
			}
		);
	}

	pageNextInfo() {
		this.resp.apiPageInfo(this.currentUrl).subscribe(
			(pageInfo) => {
				this.currentUrl = pageInfo.next;
				this.serv.buttonPageEpisode(pageInfo.next).subscribe((data) => {
					this.episodeSuccess = data;
				});
			},
			(erro) => {
				this.episodeError = erro;
			}
		);
	}

	pagePrevInfo() {
		this.resp.apiPageInfo(this.currentUrl).subscribe(
			(pageInfo) => {
				this.currentUrl = pageInfo.prev;
				this.serv.buttonPageEpisode(pageInfo.prev).subscribe((data) => {
					this.episodeSuccess = data;
				});
			},
			(erro) => {
				this.episodeError = erro;
			}
		);
	}

	openList(charList: []) {
		this.dialog.open(ListCharacterComponent);
		return this.servChar.setCharacterList(charList);
	}
}
