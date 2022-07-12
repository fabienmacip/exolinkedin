import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { User2Component } from './user2/user2.component';


const mesRoutes: Routes = [
  { path: 'user2', component: User2Component},
  { path: 'user', component: UserComponent},
  { path: 'home', component: MainComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    User2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(mesRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
