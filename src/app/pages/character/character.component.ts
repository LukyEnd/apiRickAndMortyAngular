import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiCharacterModel } from '../../model/character.model';
import { ResponseService } from '../../service/page-info.service';
import { ServiceService } from '../../service/service.service';
import { ReadCharacterComponent } from './read-character/read-character.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss', '../base/base.component.scss']
})
export class CharacterComponent implements OnInit {
  charSuccess!: ApiCharacterModel[];
  charErro!: string;
  currentUrl!: string;

  constructor(private serv: ServiceService, public dialog: MatDialog, public resp: ResponseService) { }

  ngOnInit(): void {
    this.characterInfo()
  }

  characterInfo() {
    this.serv.apiCharacterInfo()
      .subscribe(data => {
        this.charSuccess = data
        this.currentUrl = 'https://rickandmortyapi.com/api/character'
      }, error => {
        this.charErro = error
      })
  }

  pageNextInfo() {
    this.serv.apiPageInfo(this.currentUrl)
      .subscribe(pageInfo => {
        this.currentUrl = pageInfo.next;
        this.serv.buttonPageCharacter(pageInfo.next)
          .subscribe(data => {
            this.charSuccess = data;
          })
      }, erro => {
        this.charErro = erro
      })
  }

  pagePrevInfo() {
    this.serv.apiPageInfo(this.currentUrl)
      .subscribe(pageInfo => {
        this.currentUrl = pageInfo.prev
        this.serv.buttonPageCharacter(pageInfo.prev)
          .subscribe(data => {
            this.charSuccess = data;
          })
      }, erro => {
        this.charErro = erro
      })
  }

  openDialog(character: ApiCharacterModel): ApiCharacterModel {
    this.dialog.open(ReadCharacterComponent);
    return this.resp.setCharacterInfo(character);
  }
}
