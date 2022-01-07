import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './pages/character/character.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { ReadEpisodeComponent } from './pages/episode/read-episode/read-episode.component';
import { LocationComponent } from './pages/location/location.component';
import { ReadLocationComponent } from './pages/location/read-location/read-location.component';

const routes: Routes = [
  { path: '', component: CharacterComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'episode', component: EpisodeComponent },
  { path: 'location', component: LocationComponent },
  { path: 'episode/info', component: ReadEpisodeComponent },
  { path: 'location/info', component: ReadLocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
