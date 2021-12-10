import { Injectable } from "@angular/core";
import { ApiCharacterModel } from '../model/character.model';

@Injectable({
    providedIn: 'root'
})
export class ResponseService {
    public characterInfo!: ApiCharacterModel;

    constructor() { }

    getCharacterInfo() {
        return this.characterInfo;
    }

    setCharacterInfo(character: ApiCharacterModel): ApiCharacterModel {
        return this.characterInfo = character;
    }

}
