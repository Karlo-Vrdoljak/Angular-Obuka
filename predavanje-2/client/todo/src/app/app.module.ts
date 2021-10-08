import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { CardModule } from 'primeng/card';
import { TodoComponent } from './components/todo/todo/todo.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent, HomeComponent, TodoComponent],
  imports: [ButtonModule, HttpClientModule, CardModule, BrowserModule, AppRoutingModule, MenubarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
