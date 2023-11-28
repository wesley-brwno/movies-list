import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { OrderMovieComponent } from './movie-list/order-movie/order-movie.component';
import { ExcludedMovieComponent } from './excluded-movie/excluded-movie.component';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieComponent,
    OrderMovieComponent,
    ExcludedMovieComponent
  ],
  exports: [
    MovieListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListModule { }
