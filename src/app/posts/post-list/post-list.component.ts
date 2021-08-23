import { Component,OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model'
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
isLoading: boolean = false
posts: Post[]=[];
totalPosts = 0;
postPerPage = 2;
pageSizeOptions = [1,2,5,10]
currentPage=1

  constructor(private getPostService: PostService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.getPostService.getPost(this.postPerPage,this.currentPage);
    this.getPostService.getpostListener().subscribe((postData: {posts: Post[],postCount: number})=>{
      
      this.posts = postData.posts
      this.totalPosts = postData.postCount
      this.isLoading =false;
    }
    )
  }

  onChangedPage(pageData: PageEvent){
    this.isLoading = true
   this.currentPage = pageData.pageIndex+1;
   this.postPerPage = pageData.pageSize;
   this.getPostService.getPost(this.postPerPage,this.currentPage);
   
  }
  deletePost(id: string){
    this.isLoading=true
    this.getPostService.deletePost(id).subscribe(()=>{
      this.getPostService.getPost(this.postPerPage, this.currentPage)
    })
  }

}
