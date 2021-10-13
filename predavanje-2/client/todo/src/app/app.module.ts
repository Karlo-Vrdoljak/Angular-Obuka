import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoEditComponent } from './components/todo/todo-edit/todo-edit.component';
import { TodoComponent } from './components/todo/todo/todo.component';
import { HomeComponent } from './views/home/home.component';
import { TodoViewComponent } from './views/todo/todo-view/todo-view.component';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent, HomeComponent, TodoComponent, TodoViewComponent, TodoEditComponent],
  imports: [InputSwitchModule, ScrollingModule, DropdownModule, InputTextModule, ReactiveFormsModule, FormsModule, BrowserAnimationsModule, ConfirmDialogModule, ToolbarModule, ButtonModule, HttpClientModule, CardModule, BrowserModule, AppRoutingModule, MenubarModule],
  providers: [ConfirmationService],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
