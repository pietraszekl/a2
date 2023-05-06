import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Commit } from '../../interfaces/github.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent {
  commits$: Observable<Commit[]> = this.githubService.getAllCommits();
  constructor(private githubService: GithubService) {}
}
