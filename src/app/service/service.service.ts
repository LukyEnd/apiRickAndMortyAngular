import { ApiLocationModel } from './../model/location.model';
import { ApiEpisodeModel } from './../model/episode.model';
import { ApiCharacterModel } from './../model/character.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ApiPageModel } from './../model/api-page.module';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  currentUrl!: string;


  constructor(private http: HttpClient) { }

  apiCharacterInfo(): Observable<ApiCharacterModel[]> {   //só e executado 1 vez ?
    this.currentUrl = 'https://rickandmortyapi.com/api/character'
    return this.http.get(this.currentUrl)
      .pipe(pluck('results'))
  }

  apiEpisodeInfo(): Observable<ApiEpisodeModel[]> {
    return this.http.get('https://rickandmortyapi.com/api/episode')
      .pipe(pluck('results'))
  }

  apiLocationInfo(): Observable<ApiLocationModel[]> {
    return this.http.get('https://rickandmortyapi.com/api/location')
      .pipe(pluck('results'))
  }

  apiPageInfo(url: string): Observable<ApiPageModel> {
    return this.http.get(url)
      .pipe(pluck('info'))
  }

  apiNextCaracter(url: string): Observable<ApiCharacterModel[]> {
    return this.http.get(url)
      .pipe(pluck('results'))
  }
}
