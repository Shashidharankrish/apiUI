import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpAddComponent } from './ip-add/ip-add.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'ipadd', component: IpAddComponent },
  { path: 'home', component: HomeComponent},
  { path: '**', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
