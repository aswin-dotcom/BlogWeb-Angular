import { Component } from '@angular/core';
import { CenterService } from '../center.service'
import { filter } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrl: './read-more.component.scss'
})
export class ReadMoreComponent implements OnInit{
  constructor(private centerService:CenterService){}
  posts:any[]=[];
  id=this.centerService.Readmore_id;
  readmore=this.centerService.Readmore;

  ngOnInit(): void {
    this.centerService.getposts().subscribe((data)=>{
      this.posts=data

    })
    
  }




//  console.log(this.innerid);

}
