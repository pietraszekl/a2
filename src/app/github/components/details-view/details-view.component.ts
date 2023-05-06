import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { ActivatedRoute } from '@angular/router';
import { Commit } from '../../interfaces/github.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss'],
})
export class DetailsViewComponent {
  private id = this.route.snapshot.params['id'];
  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  commit$: Observable<Commit> = this.githubService.getSingleCommit(this.id);
}
