import { Component,ElementRef, OnInit, Renderer2, ViewChild, Directive} from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MenuController } from '@ionic/angular';
import { Downloader,DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  movieList: any;
  page = 1;
  @ViewChild('excerpt') excerptRef: ElementRef;
  isHiddenGrid: boolean = false;
  isHiddenList: boolean = true;
  constructor(
              private movieService: MovieService,
              private menuCtrl: MenuController,
              private downloader: Downloader
              ) {}

 ngOnInit(){
     this.loadMovies();
   
  }
  openFirst() {
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }

  showList(event){
    console.log(event)
    this.isHiddenGrid = true;
      this.isHiddenList = false
  }
  showGrid(){
    this.isHiddenGrid = false;
    this.isHiddenList = true;
  }

  loadMovies(loadMore = false, event?){
    
    if(loadMore){
      this.page += 1;
    }
    

    this.movieService.getMovies(this.page).subscribe(res => {
      this.movieList = res.movies
      console.log(res.movies)
      if(event){
        setTimeout(() => {
          console.log('Done');
          event.target.complete();
    
          // App logic to determine if all data is loaded
          // and disable the infinite scroll
          if (this.page == 1000) {
            event.target.disabled = true;
          }
        }, 500);
      }
      console.log(this.movieList.length, this.page)
  
    })



    
  }



  downloads(request,title){
    console.log(request)
    var downloasdRequest: DownloadRequest = {
      uri: request,
      title: title,
      description: '',
      mimeType: 'application/x-bittorrent',
      visibleInDownloadsUi: true,
      notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
      destinationInExternalFilesDir: {
          dirType: 'Downloads',
          subPath: 'storrent',
      }
  };
    this.downloader.download(downloasdRequest).then((location: string) =>{

        alert("File Downloaded at" + location)
    },(err)=>{

        alert(JSON.stringify(err))
    })
          
  }
}
