import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      { id: 1, title: "Movie 1", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita amet fuga sit cum odio non fugit consequuntur incidunt voluptas architecto. Quos, cupiditate. Ipsa iure, accusantium dignissimos nostrum minima enim molestias!", imageUrl: "adventure-1.jpeg", isPopular: false, datePublished: new Date(1991,10,10) },
      { id: 2, title: "Movie 2", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita amet fuga sit cum odio non fugit consequuntur incidunt voluptas architecto. Quos, cupiditate. Ipsa iure, accusantium dignissimos nostrum minima enim molestias!", imageUrl: "romance-1.jpeg", isPopular: false, datePublished: new Date(1991,10,10)},
      { id: 3, title: "Movie 3", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita amet fuga sit cum odio non fugit consequuntur incidunt voluptas architecto. Quos, cupiditate. Ipsa iure, accusantium dignissimos nostrum minima enim molestias!", imageUrl: "drama.jpeg", isPopular: true, datePublished: new Date(1991,10,10)},
      { id: 4, title: "Movie 4", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita amet fuga sit cum odio non fugit consequuntur incidunt voluptas architecto. Quos, cupiditate. Ipsa iure, accusantium dignissimos nostrum minima enim molestias!", imageUrl: "comedy-1.jpeg", isPopular: true, datePublished: new Date(1991,10,10)}
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getPopularMovies(): Movie[] {
    return this.movies.filter(i => i.isPopular);
  }

  getMovieById(id: number): Movie {
    return this.movies.find(i => i.id == id);
  }


}
