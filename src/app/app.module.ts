import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './buttons/footer/footer.component';
import { HeaderComponent } from './buttons/header/header.component';
import { CharacterComponent } from './character/character.component';
import { ReadCharacterComponent } from './character/read-character/read-character.component';
import { EpisodeComponent } from './episode/episode.component';
import { ReadEpisodeComponent } from './episode/read-episode/read-episode.component';
import { LocationComponent } from './location/location.component';
import { ReadLocationComponent } from './location/read-location/read-location.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    EpisodeComponent,
    LocationComponent,
    ReadCharacterComponent,
    ReadEpisodeComponent,
    ReadLocationComponent,
    HeaderComponent,
    FooterComponent
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
