import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiCharacterModel } from 'src/app/service/model/character.model';
import { ServiceCharacterService } from 'src/app/service/service-character.service';
import { ReadCharacterComponent } from '../read-character/read-character.component';

@Component({
	selector: 'app-list-character',
	templateUrl: './list-character.component.html',
	styleUrls: ['./list-character.component.scss', '../../base/base.component.scss'],
})
export class ListCharacterComponent implements OnInit {
	charList!: [];
	charUrlDate!: ApiCharacterModel;

	constructor(private serv: ServiceCharacterService, private dialog: MatDialog) {}

	ngOnInit(): void {
		this.respListLocation();
	}
	respListLocation() {
		this.charList = this.serv.getCharacterList();
	}

	openDialog(characterURL: string) {
		let index = characterURL.indexOf('/character/');
		let id = characterURL.substring(index + 11);
		this.serv.characterUrl(id).subscribe((data) => {
			this.charUrlDate = data;
			this.dialog.open(ReadCharacterComponent);
			return this.serv.setCharacterInfo(this.charUrlDate);
		});
	}
}
