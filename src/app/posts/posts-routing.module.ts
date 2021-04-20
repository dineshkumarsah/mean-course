import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateCompoent } from './post-create/post-create.component';
import { PostInAggridComponent } from './post-in-aggrid/post-in-aggrid.component';
import { PostListComponent } from './post-list/post-list.component';


const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path: 'create-post',
    component: PostCreateCompoent
  },
  {
    path: 'ag-grid-table',
    component: PostInAggridComponent
  },
  {
    path: "edit/:postId",
    component: PostCreateCompoent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
