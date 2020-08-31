import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _todoTasks = []

  constructor(private _httpClient: HttpClient) { }

  getAllTasks() {
    return this._httpClient.get('https://nztodo.herokuapp.com/api/tasks/?format=json');
  }

  deleteTask(id: number) {
    return this._httpClient.delete(`https://nztodo.herokuapp.com/api/task/${id}`);
  }

}
