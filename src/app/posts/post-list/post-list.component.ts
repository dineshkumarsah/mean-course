import { Component,OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
// posts = [
//   {title: 'first post', content: "first post/'content"},
//   {title: 'Second post', content: "second post/'content"},
//   {title: 'Third post', content: "Third post/'content"},
// ]
posts: Post[]=[]

  constructor(private getPostService: PostService) { }

  ngOnInit(): void {
    this.getPostService.getPost().subscribe((res)=>{
     this.posts = res
    })
  }

}
