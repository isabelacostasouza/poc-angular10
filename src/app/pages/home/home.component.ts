import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchCategories = [
    { value: 'Search card', link: '/search-card' },
    { value: 'Search creature card', link: '/search-creature-card' },
    { value: 'Search sorcery card', link: '/search-sorcery-card' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  changeCategory(categoryLink) {
    this.router.navigateByUrl(categoryLink);
  }

}
