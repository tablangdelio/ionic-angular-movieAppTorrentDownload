import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  baseUrl = "https://yts.mx/api/v2/list_movies.json"
  movieDetailsUrl = "https://yts.mx/api/v2/movie_details.json"
  constructor(
    private http: HttpClient
   
    ) { }
  getMovies(page){
    return this.http.get(`${this.baseUrl}?limit=50&sort_by=year&page=${page}`).pipe(
      map(res => {
        return res['data']
      })
    )
  }
  getDetailMovies(id){
    return this.http.get(`${this.movieDetailsUrl}?movie_id=${id}&with_images=true&with_cast=true&with_images=true&with_cast=true`).pipe(
      map(res => {
          return res['data']
        })
    )
  }

}
