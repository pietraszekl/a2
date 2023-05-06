import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Commit } from '../../interfaces/github.interfaces';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent {
  commits: Commit[] = [];
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getCommits().subscribe((data) => {
      this.commits = data;
    });
  }
}
