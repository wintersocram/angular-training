import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  private isFavorite: boolean = false;

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit() {}
}
