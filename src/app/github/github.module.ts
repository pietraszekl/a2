import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
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
    GithubRoutingModule,
    HttpClientModule
  ]
})
export class GithubModule { }
