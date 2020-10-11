import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  constructor(
    private http: HttpClient
  ) { }

  getPhotos() {
    return this.http.get(`http://starlord.hackerearth.com/insta`);
  }
}
