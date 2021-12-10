import { ApiLocationModel } from './../model/location.model';
import { ApiEpisodeModel } from './../model/episode.model';
import { ApiCharacterModel } from './../model/character.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ApiPageModel } from '../model/page.module';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  apiCharacterInfo(): Observable<ApiCharacterModel[]> {
    return this.http.get('https://rickandmortyapi.com/api/character')
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

  //SERVER DE CHARACTER --------------------------------------------------------
  buttonPageCharacter(url: string): Observable<ApiCharacterModel[]> {
    return this.http.get(url)
      .pipe(pluck('results'))
  }

  apiPrevCaracter(url: string): Observable<ApiCharacterModel[]> {
    return this.http.get(url)
      .pipe(pluck('results'))
  }

  //SERVER DE EPISODE --------------------------------------------------------
  buttonPageEpisode(url: string): Observable<ApiEpisodeModel[]> {
    return this.http.get(url)
      .pipe(pluck('results'))
  }

  apiPrevEpisode(url: string): Observable<ApiEpisodeModel[]> {
    return this.http.get(url)
      .pipe(pluck('results'))
  }

  //SERVER DE LOCATION --------------------------------------------------------
  buttonPageLocation(url: string): Observable<ApiLocationModel[]> {
    return this.http.get(url)
      .pipe(pluck('results'))
  }

  apiPrevLocation(url: string): Observable<ApiLocationModel[]> {
    return this.http.get(url)
      .pipe(pluck('results'))
  }
}