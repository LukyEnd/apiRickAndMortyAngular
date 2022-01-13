import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceCharacterService } from 'src/app/service/service-character.service';
import { ServicePageInfoService } from 'src/app/service/service-page-info.service';
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

	constructor(private serv: ServiceCharacterService, private dialog: MatDialog, private resp: ServicePageInfoService) {}

	ngOnInit(): void {
		this.characterInfo();
	}

	characterInfo() {
		this.serv.apiCharacterInfo().subscribe(
			(data) => {
				this.charSuccess = data;
				this.currentUrl = 'https://rickandmortyapi.com/api/character';
			},
			(error) => {
				this.charErro = error;
			}
		);
	}

	pageNextInfo() {
		this.resp.apiPageInfo(this.currentUrl).subscribe(
			(pageInfo) => {
				this.currentUrl = pageInfo.next;
				this.serv.buttonPageCharacter(pageInfo.next).subscribe((data) => {
					this.charSuccess = data;
				});
			},
			(erro) => {
				this.charErro = erro;
			}
		);
	}

	pagePrevInfo() {
		this.resp.apiPageInfo(this.currentUrl).subscribe(
			(pageInfo) => {
				this.currentUrl = pageInfo.prev;
				this.serv.buttonPageCharacter(pageInfo.prev).subscribe((data) => {
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
