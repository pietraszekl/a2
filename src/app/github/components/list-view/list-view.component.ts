import {Component, OnDestroy, OnInit} from '@angular/core';
import {GithubService} from '../../services/github.service';
import {Commit} from '../../interfaces/github.interfaces';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit, OnDestroy {
  commits: Commit[] = [];
  isLoading$: Observable<boolean> = this.githubService.isLoading$
  private sub!: Subscription;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.sub = this.githubService.selectedCommits$.subscribe((data) => {
      this.commits = data;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
