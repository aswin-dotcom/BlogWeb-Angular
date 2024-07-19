import { Component } from '@angular/core';
import { CenterService } from '../center.service'
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent implements OnInit {
  Userlogin_details!:any;
  User_post!:any;
  edit!:boolean;
  
  constructor(private centerService  : CenterService,private toastr: ToastrService,private router:Router) {}
  ngOnInit(): void {
    this.Userlogin_details=this.centerService.Userlogin_details
    this.centerService.getposts().subscribe((data)=>{
      this.User_post=data
      this.edit=this.centerService.Userlogin;
      // console.log(this.User_post)

    })
    // console.log(this.Userlogin_details)
  }
  handleclick(id:any){
   
      this.centerService.Readmore_id=id;
      this.centerService.Readmore=true;
      
  
  
  
  
  
    
  

  }
  handledit(id:any){
    this.centerService.edit_id=id;
    // console.log(id)


  }
  handledel(id:any){
    // console.log(id);
    this.centerService.deletepost(id).subscribe((data)=>{
      // console.log(data)
      this.centerService.getposts().subscribe((data)=>{
        this.User_post=data 
        this.toastr.error('Blog Deleted');

        // console.log(this.User_post)
  
      })

    })
  }
  closeCurrentTab(){
    // localStorage.clear();
    this.centerService.Userlogin=false;
    this.edit=false;
    this.centerService.Userlogin_details.UserName='';
    this.centerService.Userlogin_details.Password='';
    // console.log(this.centerService.Use
    
    // const url=this.router.url;
    // console.log('url',url);
    this.router.navigate([''])
  }
  
  

}
