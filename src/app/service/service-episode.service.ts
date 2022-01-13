import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { ApiEpisodeModel } from './model/episode.model';

@Injectable({
	providedIn: 'root',
})
export class ServiceEpisodeService {
	public episodeInfo!: ApiEpisodeModel
	public episodeList!: [];

	constructor(private http: HttpClient) {}

	apiEpisodeInfo(): Observable<ApiEpisodeModel[]> {
		return this.http.get(`${environment.url}episode`).pipe(pluck('results'));
	}

	buttonPageEpisode(url: string): Observable<ApiEpisodeModel[]> {
		return this.http.get(url).pipe(pluck('results'));
	}

	getEpidoseInfo(): ApiEpisodeModel {
		return this.episodeInfo;
	}
	setEpisodeInfo(episodeInfo: ApiEpisodeModel): ApiEpisodeModel {
		return (this.episodeInfo = episodeInfo);
	}

	getEpisodeList() {
		return this.episodeList;
	}
	setEpisodeList(episodeList: []) {
		this.episodeList = episodeList;
	}

	episodeUrl(id: string): Observable<ApiEpisodeModel> {
		return this.http.get<ApiEpisodeModel>(`${environment.url}episode/${id}`);
	}
}
