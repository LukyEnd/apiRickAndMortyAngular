import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceCharacterService } from 'src/app/service/service-character.service';
import { ServicePageInfoService } from 'src/app/service/service-page-info.service';
import { environment } from 'src/environments/environment.prod';
import { ApiCharacterModel } from '../../service/model/character.model';
import { ReadCharacterComponent } from './read-character/read-character.component';

@Component({
	selector: 'app-character',
	templateUrl: './character.component.html',
	styleUrls: ['./character.component.scss', '../base/base.component.scss'],
})
export class CharacterComponent implements OnInit {
	charSuccess!: ApiCharacterModel[];
	charErro!: string;
	currentUrl!: string;

	buttonPrevNull: boolean = false;
	buttonNextNull: boolean = true;

	constructor(private serv: ServiceCharacterService, private dialog: MatDialog, private resp: ServicePageInfoService) {}

	ngOnInit(): void {
		this.characterInfo();
	}

	characterInfo() {
		this.serv.apiCharacterInfo().subscribe(
			(data) => {
				this.charSuccess = data;
				this.currentUrl = `${environment.url}character`;
			},
			(error) => {
				this.charErro = error;
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
					this.currentUrl = `${environment.url}character`;
				} else {
					this.buttonNextNull = true;
					this.currentUrl = pageInfo.prev;
				}
				this.serv.buttonPageCharacter(pageInfo.prev).subscribe((data) => {
					this.charSuccess = data;
				});
			},
			(erro) => {
				this.charErro = erro;
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
				this.serv.buttonPageCharacter(pageInfo.next).subscribe((data) => {
					this.charSuccess = data;
				});
			},
			(erro) => {
				this.charErro = erro;
			}
		);
	}

	openDialog(characterInfo: ApiCharacterModel): ApiCharacterModel {
		this.dialog.open(ReadCharacterComponent);
		return this.serv.setCharacterInfo(characterInfo);
	}
}
