import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{CenterService} from '../center.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private centerService :CenterService,private router :Router,private toastr: ToastrService){}
  Users:any[]=[];
  ngOnInit(): void {
    this.centerService.check_accounts().subscribe((data)=>{
      this.Users=data;
      console.log(this.Users)
    })
  }
  // Users:any[]=[];
  LoginFrom =new FormGroup({
    UserName:new FormControl('',[Validators.required,Validators.minLength(8)]),
    Password:new FormControl('',[Validators.required,Validators.minLength(8)])

  })
  get userName(){
    return this.LoginFrom.get('UserName');
  }
  get password(){
    return this.LoginFrom.get('Password')
  }
  handlesubmit(){
    const userNameexist=this.Users.some(data=>data.UserName===this.LoginFrom.controls.UserName.value);
    const passwordexist=this.Users.some(data=>data.password===this.LoginFrom.controls.Password.value);
    // console.log(userNameexist)
    // console.log(passwordexist)
    if(userNameexist && passwordexist){
      this.toastr.success('Login SuccessFull');
      this.centerService.Userlogin=true;
      const user = { name:this.LoginFrom.controls.UserName.value  };
      this.centerService.localstorageKey=user.name;
       console.log(this.centerService.Userlogin)

      localStorage.setItem('user', JSON.stringify(user));
        // console.log( this.centerService.Userlogin);
      // console.log("login success");
      this.centerService.Userlogin_details={
        "UserName":this.LoginFrom?.controls?.UserName.value,
        "Password":this.LoginFrom?.controls?.Password.value
      }

      this.router.navigate(['profile/login/useredit'])
    }
    else{
      if(!userNameexist){
        console.log("UserName Invalid");
        this.toastr.error('UserName Invalid');
      }else{
        console.log("password Invalid")
        this.toastr.error('password Invalid');

      }
    }




  }



}
