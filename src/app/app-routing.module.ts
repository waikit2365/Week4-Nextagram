import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: '', component: ProfilesComponent },
  { path: 'users/:id', component: ImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
