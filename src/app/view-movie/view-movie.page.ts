import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { cpuUsage } from 'process';
@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.page.html',
  styleUrls: ['./view-movie.page.scss'],
})
export class ViewMoviePage implements OnInit {
    movieDetail: any =[];

  constructor(
        private route: ActivatedRoute,
        private movieService: MovieService
  ) { }

  ngOnInit() {
      let movieId = this.route.snapshot.paramMap.get('id');
      this.movieService.getDetailMovies(movieId).subscribe(details =>{
        this.movieDetail = details.movie;
        console.log(details.movie);
        
        console.log('id',movieId);
      })
        
  }
  downloads(){

  }

}
