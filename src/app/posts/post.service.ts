import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUpdated: Post[] = []
  updatedPost = new Subject<Post[]>()
  constructor(private http: HttpClient) { }

  addPost(title: string, content: string) {
    const post = {
      id: null,
      title: title,
      content: content

    }
    this.http.post<{ message: string, postId: string }>('http://localhost:3000/api/posts', post).subscribe((responseData) => {
      console.log(responseData.message);
      const id = responseData.postId;
      post.id = id
      this.postUpdated.push(post)
      this.updatedPost.next([...this.postUpdated])

    })

  }
  getPost() {
    debugger
    this.http.get<{ message: string, posts: any }>('http://localhost:3000/api/posts').pipe(
      map((postData) => {
        return postData.posts.map((post) => {
          return {
            title: post.title,
            content: post.content,
            id: post._id
          }
        })
      })
    ).
      subscribe({
        next: (tranFormPost) => {
          this.postUpdated = tranFormPost;
          this.updatedPost.next(this.postUpdated)
        }
      })
  }
  getpostListener() {
    return this.updatedPost.asObservable()
  }

  deletePost(postId: string) {
    this.http.delete("http://localhost:3000/api/posts/" + postId).subscribe((res) => {
      console.log('deleted');
      this.postUpdated.forEach((ele)=>{
         if(ele.id==postId){
           this.postUpdated.splice(this.postUpdated.indexOf(ele),1)
           this.updatedPost.next([...this.postUpdated])
         }
      })
    })
  }
}
