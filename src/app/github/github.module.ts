import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ListViewComponent} from './components/list-view/list-view.component';
import {DetailsViewComponent} from './components/details-view/details-view.component';
import {GithubRoutingModule} from './github-routing.module';
import {ListViewItemComponent} from './components/list-view-item/list-view-item.component';
import {RouterModule} from '@angular/router';
import {DatePickerComponent} from './components/date-picker/date-picker.component';

@NgModule({
  declarations: [
    ListViewComponent,
    DetailsViewComponent,
    ListViewItemComponent,
    DatePickerComponent,
  ],
  imports: [CommonModule, GithubRoutingModule, HttpClientModule, RouterModule],
})
export class GithubModule {
}
