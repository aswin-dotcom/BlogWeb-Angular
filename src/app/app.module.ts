import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FeedComponent } from './feed/feed.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReadMoreComponent } from './read-more/read-more.component';
import { LoginComponent } from './login/login.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { EditComponent } from './edit/edit.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    AddPostComponent,
    FeedComponent,
    ReadMoreComponent,
    LoginComponent,
    UserEditComponent,
    EditComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
