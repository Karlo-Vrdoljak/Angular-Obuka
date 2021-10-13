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
}
