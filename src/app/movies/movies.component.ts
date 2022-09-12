import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MovieService],
})
export class MoviesComponent implements OnInit {
  title = 'Movie List';
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  filterText: string = '';

  constructor(
    private alertify: AlertifyService,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
      this.filteredMovies = this.movies;

      console.log(this.movies);
      console.log(this.filteredMovies);
    });
  }

  onInputChange() {
    this.filteredMovies = this.filterText
      ? this.movies.filter(
          (m) =>
            m.title.indexOf(this.filterText) !== -1 ||
            m.description.indexOf(this.filterText) !== -1
        )
      : this.movies;
  }

  addToList($event: any, movie: Movie) {
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = 'Listeden Çıkar';
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');

      this.alertify.success(movie.title + ' listeye eklendi');
    } else {
      $event.target.innerText = 'Listeye Ekle';
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');

      this.alertify.error(movie.title + ' listeden çıkarıldı');
    }
  }
}
