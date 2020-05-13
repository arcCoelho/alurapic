import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos:Photo[] =[];

  constructor(
    private photoService: PhotoService,
    private activatedRote: ActivatedRoute
    ) { 
    
  }
  
  ngOnInit(): void {
    const user = this.activatedRote.snapshot.params.userName

    this.photoService.listFromUser(user)
      .subscribe(photos => this.photos = photos);

    console.log("this.photos => photo-list", this.photos);
  }

}
