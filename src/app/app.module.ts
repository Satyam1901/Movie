import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TvChainalComponent } from './tv-chainal/tv-chainal.component';
import { MoviesComponent } from './movies/movies.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { ConcertComponent } from './concert/concert.component';
import { SportsComponent } from './sports/sports.component';
import { ForkidesComponent } from './forkides/forkides.component';
import { FavComponent } from './fav/fav.component';
import { DataComponent } from './data/data.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TvChainalComponent,
    MoviesComponent,
    TvSeriesComponent,
    ConcertComponent,
    SportsComponent,
    ForkidesComponent,
    FavComponent,
    DataComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
