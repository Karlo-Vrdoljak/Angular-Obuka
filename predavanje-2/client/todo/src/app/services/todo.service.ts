import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(public http: HttpClient) {}

  getAllTodos() {
    return this.http.get(`${environment.API_URL}`);
  }
  getOneTodo({ id }: any) {
    console.log(id);

    return this.http.get(`${environment.API_URL}/one`, { params: { id } });
  }
  getAllCategories() {
    return this.http.get(`${environment.API_URL}/kategorija/all`);
  }
  updateTodo(todo: any) {
    return this.http.put(`${environment.API_URL}/one`, todo);
  }
  insertTodo(todo: any) {
    return this.http.post(`${environment.API_URL}/one`, todo);
  }
  deleteTodo({ id }: any) {
    return this.http.delete(`${environment.API_URL}/one`, { params: { id } });
  }
}
