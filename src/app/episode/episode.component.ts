import { ApiEpisodeModel } from '../model/episode.model';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ResponseService } from '../service/character-info.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  episodeSuccess!: ApiEpisodeModel[];
  episodeError!: string;
  currentUrl!: string

  constructor(private serv: ServiceService, public resp: ResponseService) { }

  ngOnInit(): void {
    this.episodeInfo()
  }

  episodeInfo() {
    this.serv.apiEpisodeInfo()
      .subscribe(data => {
        this.episodeSuccess = data
        this.currentUrl = 'https://rickandmortyapi.com/api/episode'
      }, error => {
        this.episodeError = error
      })
  }

  pageNextInfo() {
    this.serv.apiPageInfo(this.currentUrl)
      .subscribe(pageInfo => {
        this.currentUrl = pageInfo.next;
        this.serv.buttonPageEpisode(pageInfo.next)
          .subscribe(data => {
            this.episodeSuccess = data;
          })
      }, erro => {
        this.episodeError = erro
      })
  }

  pagePrevInfo() {
    this.serv.apiPageInfo(this.currentUrl)
      .subscribe(pageInfo => {
        this.currentUrl = pageInfo.prev
        this.serv.buttonPageEpisode(pageInfo.prev)
          .subscribe(data => {
            this.episodeSuccess = data;
          })
      }, erro => {
        this.episodeError = erro
      })
  }

}
