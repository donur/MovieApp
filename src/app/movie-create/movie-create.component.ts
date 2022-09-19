import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss'],
  providers: [CategoryService, MovieService],
})
export class MovieCreateComponent implements OnInit {
  categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private movieService: MovieService,
    private router: Router, // Create butonuna basıldığında movies list sayfasına yönlendirme yapar.
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  createMovie(title: any, description: any, imageUrl: any, categoryId: any) {
    if (
      title.value === '' ||
      description.value === '' ||
      imageUrl.value === '' ||
      categoryId.value === '-1'
    ) {
      this.alertify.error('You must fill in all fields!');
      return;
    }

    if (title.value.length < 5) {
      this.alertify.error(
        'You must enter a minimum of 5 characters for the title!'
      );
      return;
    }

    if (description.value.length < 10 || description.value.length > 50) {
      this.alertify.error(
        'For Description, you must enter a value in the range of 10-50 characters!'
      );
      return;
    }

    const imgExtensions = ['jpeg', 'jpg', 'png'];
    const imgExtension = imageUrl.value.split('.').pop();

    if (imgExtensions.indexOf(imgExtension) === -1) {
      this.alertify.error(
        "You can only add images with 'jpeg', 'jpg', 'png' extensions!"
      );
      return;
    }

    const movie = {
      id: 0,
      title: title.value,
      description: description.value,
      imageUrl: imageUrl.value,
      isPopular: false,
      datePublished: new Date().getTime(),
      categoryId: categoryId.value,
    };

    this.movieService.createMovie(movie).subscribe(
      (data) => this.router.navigate(['/movies', data.id]) // Create butonuna basıldığında movies list sayfasına yönlendirme yapar.
    );
  }
}
