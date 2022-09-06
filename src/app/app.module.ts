import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfilemenuComponent } from './components/profilemenu/profilemenu.component';
import { ClickOutsideDirective } from './common/clickOutside.directive';
import { NaltovningComponent } from './pages/naltovning/naltovning.component';
import { MalningarComponent } from './pages/malningar/malningar.component';
import { BlandatComponent } from './pages/blandat/blandat.component';
import { GridComponent } from './components/grid/grid.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilemenuComponent,
    ClickOutsideDirective,
    NaltovningComponent,
    MalningarComponent,
    BlandatComponent,
    GridComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
