import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { ApiCharacterModel } from './model/character.model';

@Injectable({
	providedIn: 'root',
})
export class ServiceCharacterService {
	public characterInfo!: ApiCharacterModel;
	public characterList!: [];

	constructor(private http: HttpClient) {}

	apiCharacterInfo(): Observable<ApiCharacterModel[]> {
		return this.http.get(`${environment.url}character`).pipe(pluck('results'));
	}

	buttonPageCharacter(url: string): Observable<ApiCharacterModel[]> {
		return this.http.get(url).pipe(pluck('results'));
	}

	getCharacterInfo(): ApiCharacterModel {
		return this.characterInfo;
	}
	setCharacterInfo(characterInfo: ApiCharacterModel): ApiCharacterModel {
		return (this.characterInfo = characterInfo);
	}

	getCharacterList() {
		return this.characterList;
	}
	setCharacterList(characterList: []) {
		this.characterList = characterList;
	}

	characterUrl(id: string): Observable<ApiCharacterModel> {
		return this.http.get<ApiCharacterModel>(`${environment.url}character/${id}`);
	}
}
