import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: ()=>import('./posts/posts.module')
    .then(m=>m.PostsModule)
  },
  {
    path: 'test',
    loadChildren: ()=>import('./test/test/test.module')
    .then(m=>m.TestModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
