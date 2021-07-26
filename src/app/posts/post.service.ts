import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUpdated: Post[] = []
  updatedPost = new Subject<Post[]>()
  constructor(private http: HttpClient, private router: Router) { }

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
      this.router.navigate(['/post']);
    })

  }
  getPost() {
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
  getPostById(id: string){
    return this.http.get<{_id: string, title: string, content: string}>("http://localhost:3000/api/posts/" + id)
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
  updatePost(id: string, title: string, content: string){
   const post: Post = {id: id, title: title, content: content}
   this.http.put("http://localhost:3000/api/posts/" + id,post).subscribe((res)=>{
     const upDatedPost = [...this.postUpdated]
     const oldIndex = upDatedPost.findIndex(p=>p.id==id) 
     upDatedPost[oldIndex] = post
     this.postUpdated = upDatedPost
     this.updatedPost.next([...this.postUpdated])
     this.router.navigate(['/post']);
   })
  }
}
