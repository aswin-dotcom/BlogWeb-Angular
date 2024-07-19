import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CenterService   {
  localstorageKey!:any;
  edit_id!:any;
  posts:any[]=[];
  accounts:any[]=[];
  Readmore!:boolean;
  Readmore_id!:any;
  Userlogin:boolean=false;
  Userlogin_details:any={
    UserName:'',
    Password:''

  } 
  constructor(private http:HttpClient) { }
//------------------------------upadateapi----------------------------------------------------------------------
update(id:any,obj:any){
  return this.http.put<any>(`http://localhost:3000/posts/${id}`,obj)

}
  // ----------------------------------deleapi-----------------------------------------------------------------
  deletepost(id:any){
    return this.http.delete<void>(`http://localhost:3000/posts/${id}`)
  }
  
  // -------------------------------------login------------------------------------------------------------------
  check_accounts(){
    return this.http.get<any>('http://localhost:3000/account')
  }

   //--------------------------------------- sign Up --------------------------------------------------------------
   get_accounts(){
    return this.http.get<any>('http://localhost:3000/account')
   }
 
  posts_accounts(obj:any){
    return this.http.post<any>('http://localhost:3000/account',obj);
  }
  // -------------------------------------------------------------------------------------------------------------------
  // -----------------------------------feed----------------------------------------------------------------------------
 
  getposts(){
    return this.http.get<any[]>('http://localhost:3000/posts')
  }
  // get using id-------------------------------------------------------------------
  getpostsid(id:string){
    return this.http.get<any>(`http://localhost:3000/posts/${id}`)
  }
  // ----------------------------------Add Post---------------------------------------------------------------------------
  post_blog(obj:any){
    return this.http.post<any>('http://localhost:3000/posts',obj)
  }
  //  ----------------------------------------------------------------------------------------------------------------------





}
