import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { EpisodeComponent } from './episode/episode.component';
import { LocationComponent } from './location/location.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ReadCharacterComponent } from './character/read-character/read-character.component';
import { ReadEpisodeComponent } from './episode/read-episode/read-episode.component';
import { ReadLocationComponent } from './location/read-location/read-location.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    EpisodeComponent,
    LocationComponent,
    ReadCharacterComponent,
    ReadEpisodeComponent,
    ReadLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
