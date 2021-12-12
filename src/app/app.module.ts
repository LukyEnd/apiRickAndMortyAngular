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
import { CharacterComponent } from './pages/character/character.component';
import { ReadCharacterComponent } from './pages/character/read-character/read-character.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { ReadEpisodeComponent } from './pages/episode/read-episode/read-episode.component';
import { LocationComponent } from './pages/location/location.component';
import { ReadLocationComponent } from './pages/location/read-location/read-location.component';
import { StyleBaseComponent } from './pages/base/base.component';


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
    FooterComponent,
    StyleBaseComponent
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
