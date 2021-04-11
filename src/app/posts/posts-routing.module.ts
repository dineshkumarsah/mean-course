import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateCompoent } from './post-create/post-create.component';


const routes: Routes = [
  {
    path: '',
    component: PostCreateCompoent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
