import { Component , DoCheck, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CenterService  } from '../center.service'
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit,DoCheck {
  constructor(private centerService:CenterService,private toastr: ToastrService){}
 
    id!:string;
    post_edit!:any;
    todate=new Date();
    pipe=new DatePipe('en-IN');
    formatDate=this.pipe.transform(this.todate,'mediumDate')

    ngOnInit(): void {
      
      this.id=this.centerService.edit_id;
      console.log(this.id)
      this.post_edit=this.centerService.getpostsid(this.id).subscribe((data)=>{
        this.post_edit=data;
        console.log(this.post_edit)
        this.editForm=new FormGroup({
          Name:new FormControl(this.post_edit?.Name||'',[Validators.required,Validators.minLength(5)]),
          Date:new FormControl(this.post_edit?.Date||'',[Validators.required]),
          title:new FormControl(this.post_edit?.title||'',[Validators.required,Validators.minLength(5)]),
          Body:new FormControl(this.post_edit?.Body||'',[Validators.required,Validators.minLength(15)])
      
          })
      })
      
      
      
    }
    ngDoCheck(): void {
      this.editForm.get('Name')?.setValue(this.post_edit?.Name);
      this.editForm.get('Date')?.setValue(this.formatDate)


    }
    editForm=new FormGroup({
      Name:new FormControl(this.post_edit?.Name||'',[Validators.required,Validators.minLength(5)]),
      Date:new FormControl(this.post_edit?.Date||'',[Validators.required]),
      title:new FormControl(this.post_edit?.title||'',[Validators.required,Validators.minLength(5)]),
      Body:new FormControl(this.post_edit?.Body||'',[Validators.required,Validators.minLength(15)])
  
      })
      get userName(){
        return this.editForm.get('Name')
      } 
      get date(){
        return this.editForm.get('Date')
      }
      get tit(){
        return this.editForm.get('title')
      }
      get body(){
        return this.editForm.get('Body')
      }
      handlesave(){
        this.centerService.update(this.id,this.editForm.value).subscribe((data)=>{
          console.log(data);
          this.toastr.success('Blog Edited');

        })
        this.editForm?.get('Name')?.setValue('');
        this.editForm?.get('Date')?.setValue('');
        this.editForm?.get('title')?.setValue('');
        this.editForm?.get('Body')?.setValue('');


      }


}
