import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiEpisodeModel } from 'src/app/service/model/episode.model';
import { ServiceEpisodeService } from 'src/app/service/service-episode.service';
import { ReadEpisodeComponent } from '../read-episode/read-episode.component';

@Component({
	selector: 'app-list-episode',
	templateUrl: './list-episode.component.html',
	styleUrls: ['./list-episode.component.scss', '../../base/base.component.scss'],
})
export class ListEpisodeComponent implements OnInit {
	episodeList!: [];
	episodeUrlDate!: ApiEpisodeModel;

	constructor(private serv: ServiceEpisodeService, private dialog: MatDialog) {}

	ngOnInit(): void {
		this.respListLocation();
	}

	respListLocation() {
		this.episodeList = this.serv.getEpisodeList();
	}

	openDialog(episodeUrl: string) {
		let index = episodeUrl.indexOf('/episode/');
		let id = episodeUrl.substring(index + 9);
		this.serv.episodeUrl(id).subscribe((data) => {
			this.episodeUrlDate = data;
			this.dialog.open(ReadEpisodeComponent);
			return this.serv.setEpisodeInfo(this.episodeUrlDate);
		});
	}
}
