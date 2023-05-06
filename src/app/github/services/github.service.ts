import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getCommits(): Observable<any> {
    const apiUrl = 'https://api.github.com/repos/angular/angular/commits';
    const params = new HttpParams().set('since', '2023-05-04T10:00:00Z');

    return this.http.get<any>(apiUrl, {
      params,
    });
  }
}
