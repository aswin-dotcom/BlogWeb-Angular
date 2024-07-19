import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { EditComponent } from './edit/edit.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:FeedComponent},
  {path:'profile/login/useredit/addposts',component:AddPostComponent},
  {path:'readmore',component:ReadMoreComponent},
  {path:'profile',component:ProfileComponent},
  {path:'profile/login',component:LoginComponent},
  {path:'profile/login/useredit',component:UserEditComponent,canActivate:[authGuard]},
  {path:'profile/login/useredit/readmore',component:ReadMoreComponent},
  {path:'profile/login/useredit/edit',component:EditComponent},
  

 
  
  
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
