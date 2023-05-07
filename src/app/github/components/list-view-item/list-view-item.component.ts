import {Component, Input} from '@angular/core';
import {Commit} from '../../interfaces/github.interfaces';

@Component({
  selector: 'app-list-view-item',
  templateUrl: './list-view-item.component.html',
  styleUrls: ['./list-view-item.component.scss'],
})
export class ListViewItemComponent {
  @Input()
  commit!: Commit;
}
