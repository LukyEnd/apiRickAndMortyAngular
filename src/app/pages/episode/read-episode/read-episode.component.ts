import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/service/page-info.service';

@Component({
  selector: 'app-read-episode',
  templateUrl: './read-episode.component.html',
  styleUrls: ['./read-episode.component.scss']
})
export class ReadEpisodeComponent implements OnInit {
  episodeInfo!: any;

  constructor(public resp: ResponseService) { }

  ngOnInit(): void {
    this.respEpisode()
  }

  respEpisode() {
    this.episodeInfo = this.resp.getEpisodeInfo()
    console.log('Variavel da pagina', this.episodeInfo)
  }
}
