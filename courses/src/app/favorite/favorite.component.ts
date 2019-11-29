import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean = false;
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ favoriteValue: this.isSelected });
  }

  ngOnInit() {}
}

export interface FavoriteChangedEventArgs {
  favoriteValue: boolean
}