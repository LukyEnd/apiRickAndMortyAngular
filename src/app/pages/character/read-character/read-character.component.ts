import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/service/character-info.service';
import { ApiCharacterModel } from '../../../model/character.model';

@Component({
  selector: 'app-read-character',
  templateUrl: './read-character.component.html',
  styleUrls: ['./read-character.component.scss']
})
export class ReadCharacterComponent implements OnInit {
  charSuccess!: ApiCharacterModel;
  constructor(private resp: ResponseService) { }
  ngOnInit(): void {
    this.respCharacter()
  }
  respCharacter() {
    this.charSuccess = this.resp.getCharacterInfo()
  }
}
