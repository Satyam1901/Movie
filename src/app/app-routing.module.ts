import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [{path:'', component:MainPageComponent},
{path:'mainpage', component:MainPageComponent},
{path:'t', component:TvChainalComponent},
{path:'movies', component: MoviesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
