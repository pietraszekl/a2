import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {BehaviorSubject, catchError, map, Observable, of, retry, shareReplay, tap, throwError} from 'rxjs';
import {Commit} from '../interfaces/github.interfaces';

const API_URL = 'https://api.github.com/repos/angular/angular/commits';
const CACHE_SIZE = 1;
const PER_PAGE_COUNT = 100;

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private commits$ = new BehaviorSubject<Commit[]>([]);
  public selectedCommits$ = this.commits$.asObservable();
  private loading$ = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.loading$.asObservable();
  private error$ = new BehaviorSubject<string>('');
  public getError$ = this.error$.asObservable();

  constructor(private http: HttpClient) {
  }

  setFromDate(date: Date): void {
    if (date) {
      this.getAllCommits(date);
    }
  }

  getAllCommits(date: Date): void {
    this.loading$.next(true)
    this.retrieveCommitsByDate(date).subscribe((data) => {
      this.commits$.next(data);
      this.loading$.next(false)
    }, (error) => {
      this.handleError(error)
    });
  }

  getSingleCommit(id: string): Observable<Commit> {
    return this.http
      .get<Commit>(`${API_URL}/${id}`).pipe(catchError(err => this.handleError(err)))
  }

  retrieveCommitsByDate(date: Date): Observable<Commit[]> {
    const formattedDate = new Date(date).toISOString();
    const params = new HttpParams().set('since', formattedDate).set("per_page", PER_PAGE_COUNT);

    return this.http.get<Commit[]>(API_URL, {
      params,
    })
  }

  subtractMonths(date: Date, months: number) {
    date.setMonth(date.getMonth() - months);
    return date;
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    this.loading$.next(false);
    this.error$.next(error.message)
    return throwError(() => new Error('Something bad happened; please try again later.'));
  };
}
