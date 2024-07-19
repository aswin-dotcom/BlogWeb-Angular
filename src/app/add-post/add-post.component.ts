import { Component, OnInit ,DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import {CenterService } from '../center.service'
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss'
})
export class AddPostComponent implements OnInit ,DoCheck {
  constructor(private center:CenterService,private toastr: ToastrService){}
   date=new Date();
   ata=new DatePipe('en-IN');
   ranformdate=this.ata.transform(this.date,'mediumDate');
  
  ngOnInit(): void {
    const todate=new Date();
     const data=new DatePipe('en-IN');
     const tranformdate=data.transform(todate,'mediumDate');
   
    this.addPostForm=new FormGroup({
      Name:new FormControl(this.center.Userlogin_details?.UserName,[Validators.required,Validators.minLength(5)]),
      Date:new FormControl(tranformdate,[Validators.required]),
      title:new FormControl('',[Validators.required,Validators.minLength(5)]),
      Body:new FormControl('',[Validators.required,Validators.minLength(15)])
    })

    
  }
  ngDoCheck(): void {
    this.addPostForm?.get('Name')?.setValue(this.center.Userlogin_details?.UserName);
    this.addPostForm?.get('Date')?.setValue(this.ranformdate)
  }
  addPostForm=new FormGroup({
    Name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    Date:new FormControl('',[Validators.required]),
    title:new FormControl('',[Validators.required,Validators.minLength(5)]),
    Body:new FormControl('',[Validators.required,Validators.minLength(15)])

  })
  handlesubmit(addPostForm:FormGroup){
    this.center.post_blog(addPostForm.value).subscribe((data)=>
    console.log(data));
    this.toastr.success('Blog Posted');
    this.addPostForm?.get('Name')?.setValue('');
    this.addPostForm?.get('Date')?.setValue('');
    this.addPostForm?.get('title')?.setValue('');
    this.addPostForm?.get('Body')?.setValue('');


    

    


    
    



  }

  get Name(){
    return this.addPostForm.get('Name');
  }
  get Date(){
    return this.addPostForm.get('Date');
  }
  get title(){
    return this.addPostForm.get('title');
  }
  get Body(){
    return this.addPostForm.get('Body')
  }
  
}
