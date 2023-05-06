import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './components/list-view/list-view.component';
import { DetailsViewComponent } from './components/details-view/details-view.component';
import { GithubRoutingModule } from './github-routing.module';



@NgModule({
  declarations: [
    ListViewComponent,
    DetailsViewComponent
  ],
  imports: [
    CommonModule,
    GithubRoutingModule
  ]
})
export class GithubModule { }
