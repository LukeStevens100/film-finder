import { Component, Input } from '@angular/core';
import { SlicePipe } from '@angular/common';

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string
}
@Component({
  selector: 'app-movie-card',
  imports: [SlicePipe],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  // @Input allows a parent component to pass data into this card
  @Input({ required: true }) movie!: Movie;
  
  // TMDB base URL for images
  readonly imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
}
