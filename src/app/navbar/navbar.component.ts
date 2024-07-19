import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CenterService }from '../center.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit  {
  edit!:boolean;

  ngOnInit(): void {
    this.edit=this.centerService.Userlogin
  }
  constructor(private centerService:CenterService,private router:Router){}

  
    // this.router.navigate([url.split('/')])
    // console.log(url.split('/'))


  

}
