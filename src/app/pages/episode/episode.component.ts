import { Component, OnInit } from '@angular/core';
import { ApiEpisodeModel } from '../../model/episode.model';
import { ResponseService } from '../../service/page-info.service';
import { ServiceService } from '../../service/service.service';
import { ReadEpisodeComponent } from './read-episode/read-episode.component';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss', '../base/base.component.scss']
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

  openDialog(episode: any): any {
    // this.open(ReadEpisodeComponent);
    console.log('Dados do episodio', episode)
    return this.resp.setEpisodeInfo(episode);
  }
}
