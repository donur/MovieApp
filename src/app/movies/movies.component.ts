import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

movies = [
  { id: 1, title: "Movie 1", description: "Adventure", imageUrl: "adventure-1.jpeg" },
  { id: 2, title: "Movie 2", description: "Romance", imageUrl: "romance-1.jpeg"},
  { id: 3, title: "Movie 3", description: "Drama", imageUrl: "drama.jpeg"},
  { id: 4, title: "Movie 4", description: "Comedy", imageUrl: "comedy.jpeg"}
]
}
