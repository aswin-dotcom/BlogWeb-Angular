import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CenterService}from '../center.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit {
  posts:any=[];
  storedValue: any;
  storeItem:any;
  edit:boolean=false;
  constructor(private centerService: CenterService, private router :Router){}
  ngOnInit(): void {
    this.centerService.getposts().subscribe((data)=>{
      this.posts=data.slice().reverse();
      console.log(this.posts);
      this.edit=this.centerService.Userlogin
   
    });
    
   

  }
  handleclick(id:any){
    this.centerService.Readmore_id=id;
    this.centerService.Readmore=true;
    





  }

  
  


}
