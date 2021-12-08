import { ApiEpisodeModel } from '../model/episode.model';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  constructor(private serv: ServiceService) { }

  episodeSuccess!: ApiEpisodeModel[];
  episodeError!: string;

  ngOnInit(): void {
    this.episodeInfo()
  }

  episodeInfo() {
    this.serv.apiEpisodeInfo()
      .subscribe(data => {
        this.episodeSuccess = data
      }, error => {
        this.episodeError = error
      })
  }
}
