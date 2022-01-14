import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceCharacterService } from 'src/app/service/service-character.service';
import { ServiceEpisodeService } from 'src/app/service/service-episode.service';
import { ServicePageInfoService } from 'src/app/service/service-page-info.service';
import { environment } from 'src/environments/environment.prod';
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

	buttonPrevNull: boolean = false;
	buttonNextNull: boolean = true;

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
				this.currentUrl = `${environment.url}episode`;
			},
			(error) => {
				this.episodeError = error;
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
					this.currentUrl = `${environment.url}episode`;
				} else {
					this.buttonNextNull = true;
					this.currentUrl = pageInfo.prev;
				}
				this.serv.buttonPageEpisode(pageInfo.prev).subscribe((data) => {
					this.episodeSuccess = data;
				});
			},
			(erro) => {
				this.episodeError = erro;
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
				this.serv.buttonPageEpisode(pageInfo.next).subscribe((data) => {
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
