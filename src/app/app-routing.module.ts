import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './pages/character/character.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { ErrorComponent } from './pages/error/error.component';
import { LocationComponent } from './pages/location/location.component';

const routes: Routes = [
	{ path: '', component: CharacterComponent },
	{ path: 'character', component: CharacterComponent },
	{ path: 'episode', component: EpisodeComponent },
	{ path: 'location', component: LocationComponent },
	{ path: '**', component: ErrorComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
