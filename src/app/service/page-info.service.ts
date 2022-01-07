import { ApiLocationModel } from './../model/location.model';
import { ApiEpisodeModel } from './../model/episode.model';
import { Injectable } from "@angular/core";
import { ApiCharacterModel } from '../model/character.model';

@Injectable({
    providedIn: 'root'
})
export class ResponseService {
    public characterInfo!: ApiCharacterModel;
    public episodeInfo!: ApiEpisodeModel;
    public locationInfo!: ApiLocationModel;

    constructor() { }

    //Ver mais Character
    getCharacterInfo() {
        return this.characterInfo;
    }
    setCharacterInfo(character: ApiCharacterModel): ApiCharacterModel {
        return this.characterInfo = character;
    }

    //Ver mais Episode
    getEpisodeInfo() {
        return this.episodeInfo;
    }
    setEpisodeInfo(episode: any): ApiCharacterModel {
        console.log('Info do Server', episode)
        return this.episodeInfo = episode;
    }

    //Ver mais Location
    getLocationInfo() {
        return this.locationInfo;
    }
    setLocationInfo(location: any): ApiCharacterModel {
        return this.locationInfo = location;
    }
}
