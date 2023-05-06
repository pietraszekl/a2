import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './components/list-view/list-view.component';
import { DetailsViewComponent } from './components/details-view/details-view.component';

const routes: Routes = [
  { path: '', component: ListViewComponent },
  { path: ':id', component: DetailsViewComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class GithubRoutingModule {}
