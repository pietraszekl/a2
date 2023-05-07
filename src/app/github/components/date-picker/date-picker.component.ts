import {ChangeDetectionStrategy, Component} from '@angular/core';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent {
  constructor(private githubService: GithubService) {
  }

  handleDateChange(event: Partial<Event>):void {
    const date = (event.target as HTMLInputElement).value;
    const formattedDate = new Date(date);

    this.githubService.setFromDate(formattedDate);
  }
}
