import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CenterService } from '../center.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  constructor(private centerService:CenterService,private toastr: ToastrService){}
  accounts:any[]=[];
  UserLogin:boolean=this.centerService.Userlogin;

  accountcreation=new FormGroup({
    UserName:new FormControl('',[Validators.required,Validators.minLength(8)]),
    email:new FormControl('',[Validators.required,Validators.minLength(8)]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmpassword:new FormControl('',[Validators.required,Validators.minLength(8)])
    




  })
  ngOnInit(): void {
    this.centerService.get_accounts().subscribe((data)=>{
      this.accounts=data;
      // console.log(this.accounts)
      // this.accounts.map((data)=>{
      //   console.log(data.UserName)
      // })
      // console.log(data)
    })
   
    
  }
  // get userName(){
  //   return this.accountcreation?.get('UserName');
  // }
  handlesubmit(){
    
    if(this.accountcreation.controls.password.value===this.accountcreation.controls.confirmpassword.value){
      console.log("password correct");
     const arr=this.accounts.some(data=>data.UserName===this.accountcreation.controls.UserName.value)
     console.log(arr);
     if(!arr){
      console.log("registration Successfull");
      // this.toastr.success('Hello world!', 'Toastr fun!');
      this.centerService.posts_accounts(this.accountcreation.value).subscribe((data)=>{
        console.log(data)
      })
      this.toastr.success('Registration SuccessFull');

     }else{
      console.log("UserName already Taken")
      this.toastr.error('UserName already Taken');
     }
     
  
      
      

    }else{
      console.log("password mismatch");
    }

  
  }
   get UserName(){
    return this.accountcreation?.get('UserName')
   }
   get email(){
    return this.accountcreation?.get('email')
   }
   get password(){
    return this.accountcreation?.get('password')
   }
   get confirmpassword(){
    return this.accountcreation?.get('confirmpassword')
   }
}

  


