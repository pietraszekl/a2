import {Component} from '@angular/core';
import {GithubService} from '../../services/github.service';
import {ActivatedRoute} from '@angular/router';
import {Commit} from '../../interfaces/github.interfaces';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html'
})
export class DetailsViewComponent {
  errorMsg$: Observable<string> = this.githubService.getError$
  private id = this.route.snapshot.params['id'];
  commit$: Observable<Commit> = this.githubService.getSingleCommit(this.id);

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {
  }
}
