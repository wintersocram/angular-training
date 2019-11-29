import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  private basePath: string = '../../assets/img/';
  private starModels = {
    'star': {
      'isFill'  : false,
      'title'   : 'no start selected. Click to give a star.',
      'path'    : `${this.basePath}star.svg`
    },
    'starFill': {
      'isFill'  : true,
      'title'   : 'a star was given for this item. Click to undo.',
      'path'    : `${this.basePath}star-fill.svg`
    }
  };
  private starIcon = this.starModels.star;

  private toggleStarModel() {
    this.starIcon = this.starIcon.isFill ? this.starModels.star : this.starModels.starFill;
    console.debug(`startIcon isFill? ${this.starIcon.isFill}`);
  }

  onClick() {
    this.toggleStarModel();
  }

  ngOnInit() {}
}
