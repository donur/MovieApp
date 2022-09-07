import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      { id: 1, title: "Movie 1", description: "Adventure", imageUrl: "adventure-1.jpeg" },
      { id: 2, title: "Movie 2", description: "Romance", imageUrl: "romance-1.jpeg"},
      { id: 3, title: "Movie 3", description: "Drama", imageUrl: "drama.jpeg"},
      { id: 4, title: "Movie 4", description: "Comedy", imageUrl: "comedy-1.jpeg"}
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie {
    return this.movies.find(i => i.id == id);
  }


}
