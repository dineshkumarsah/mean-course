import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUpdated: Post[] = []
  updatedPost = new Subject<Post[]>()
  constructor(private http: HttpClient, private router: Router) { }

  addPost(title: string, content: string, image: File) {
    debugger

    const postData = new FormData();
    postData.append('title', title);
    postData.append('content', content);
    postData.append('image', image, title);

    this.http.post<{ message: string, post: Post }>('http://localhost:3000/api/posts', postData).
      subscribe((responseData) => {
        const post: Post = {
          id: responseData.post.id,
          title: title,
          content: content,
          imagePath: responseData.post.imagePath
        }
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
            id: post._id,
            imagePath: post.imagePath
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
  getPostById(id: string) {
    return this.http.get<{ _id: string, title: string, content: string, imagePath: string }>("http://localhost:3000/api/posts/" + id)
  }
  getpostListener() {
    return this.updatedPost.asObservable()
  }

  deletePost(postId: string) {
    this.http.delete("http://localhost:3000/api/posts/" + postId).subscribe((res) => {
      console.log('deleted');
      this.postUpdated.forEach((ele) => {
        if (ele.id == postId) {
          this.postUpdated.splice(this.postUpdated.indexOf(ele), 1)
          this.updatedPost.next([...this.postUpdated])
        }
      })
    })
  }
  updatePost(id: string, title: string, content: string, image: File | string) {
    let postData: Post | FormData
    if (typeof (image) == 'object') {
      postData = new FormData();
      postData.append("id", id);
      postData.append("title", title);
      postData.append("content", content);
      postData.append("image", image, title)
    } else {
      postData = {
        id: id,
        title: title,
        content: content,
        imagePath: image
      }
    }
    this.http.put("http://localhost:3000/api/posts/" + id, postData).subscribe((res) => {
      const upDatedPost = [...this.postUpdated]
      const oldIndex = upDatedPost.findIndex(p => p.id == id)
      const post: Post = {
        id: id,
        title: title,
        content: content,
        imagePath: ""
      }
      upDatedPost[oldIndex] = post
      this.postUpdated = upDatedPost
      this.updatedPost.next([...this.postUpdated])
      this.router.navigate(['/post']);
    })
  }
}
