import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model'

@Injectable({
  providedIn: 'root'
})
export class PostService {
postUpdated: Post[]=[]
updatedPost = new Subject<Post[]>()
  constructor() { }

  addPost(title: string, content: string){
    const post = {
      title:title,
      content: content

    }
   this.postUpdated.push(post)
   this.updatedPost.next(this.postUpdated)
  }
  getPost(){
    return this.updatedPost.asObservable();
  }
}
