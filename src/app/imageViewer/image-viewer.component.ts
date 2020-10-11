import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../providers/instagram.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  constructor(private instagramService: InstagramService) { };
  data: any = [];
  isError: boolean = false;

  ngOnInit(): void {
    this.instagramService.getPhotos()
      .subscribe(response => {
        this.data = response;
      },
        error => {
          this.isError = true;
          console.log(error);
        })
  }

  sortData(sort: Sort) {
    if (sort.active == "Likes") {
      sort.direction == 'asc' ? this.data.sort((a, b) => (a.likes - b.likes)) :
        this.data.sort((a, b) => (b.likes - a.likes));
    } else {
      sort.direction == 'asc' ? this.data.sort((a, b) => (<any>new Date(a.timestamp) - <any>new Date(b.timestamp))) :
        this.data.sort((a, b) => (<any>new Date(b.timestamp) - <any>new Date(a.timestamp)));
    }
  }
}
