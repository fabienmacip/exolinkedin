import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { User2Component } from './user2/user2.component';
import { TrainComponent } from './train/train.component';


const mesRoutes: Routes = [
  { path: 'user2', component: User2Component},
  { path: 'user', component: UserComponent},
  { path: 'train', component: TrainComponent},
  { path: 'home', component: MainComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    User2Component,
    TrainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(mesRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
