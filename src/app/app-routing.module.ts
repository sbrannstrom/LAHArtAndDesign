import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlandatComponent } from './pages/blandat/blandat.component';
import { HomeComponent } from './pages/home/home.component';
import { MalningarComponent } from './pages/malningar/malningar.component';
import { NaltovningComponent } from './pages/naltovning/naltovning.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hem',
    pathMatch: 'full'
  },
  {
    path: 'hem',
    component: HomeComponent
  },
  {
    path: 'tovningar',
    component: NaltovningComponent
  },
  {
    path: 'oljemalningar',
    component: MalningarComponent
  },
  {
    path: 'blandat',
    component: BlandatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
