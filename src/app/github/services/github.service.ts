import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commit } from '../interfaces/github.interfaces';
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  apiUrl = 'https://api.github.com/repos/angular/angular/commits';
  constructor(private http: HttpClient) {}

  getAllCommits(): Observable<Commit[]> {
    const params = new HttpParams().set('since', '2023-05-04T10:00:00Z');

    return this.http.get<Commit[]>(this.apiUrl, {
      params,
    });
  }

  getSingleCommit(id: string): Observable<Commit> {
    return this.http.get<Commit>(`${this.apiUrl}/${id}`);
  }
}
