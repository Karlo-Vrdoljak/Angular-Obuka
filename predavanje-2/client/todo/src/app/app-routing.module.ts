import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TodoViewComponent } from './views/todo/todo-view/todo-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo/:id', component: TodoViewComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
