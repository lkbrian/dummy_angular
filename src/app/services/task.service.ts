import { Injectable } from '@angular/core';
import { Task } from './../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    "Content-Type":"application/json"
  })
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://dummy-db-ng.onrender.com/tasks';


  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTasks(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
  updateTasksReminder(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.patch<Task>(url,task,httpOptions);
  }
  addTask(task: Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions);
  }
}
