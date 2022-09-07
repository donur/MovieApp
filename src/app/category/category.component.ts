import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  // categories = [ "Adventure", "Romance", "Drama", "Comedy"];

  categories: Category[];
  categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }

  ngOnInit(): void {}
}
