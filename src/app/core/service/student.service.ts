import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  subscribe(arg0: { next: (data: any) => any; error: () => string; }) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8080/api/student';

  constructor(private http: HttpClient) {}

	private getHeaders() {
    const token = localStorage.getItem('token');

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
  }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl, this.getHeaders());
  }

  getById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`, this.getHeaders());
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student, this.getHeaders());
  }

  update(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student, this.getHeaders());
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.getHeaders());
  }
}