import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service'

@Component({
  selector: 'app-post-in-aggrid',
  templateUrl: './post-in-aggrid.component.html',
  styleUrls: ['./post-in-aggrid.component.css']
})
export class PostInAggridComponent implements OnInit {
  grid_api
  posts: Post[]=[]
  grid_options = {
    rowData: [],
    columnDefs: [
      {
        headerName: 'Title', field: 'title'
      },
      {
        headerName: 'Content', field: 'content'
      }
    ],
    onGridReady: (params: any)=>{
     this.grid_api = params.api
     this.getPosts();
    }
  }
  constructor(private getPostService: PostService) { }

  ngOnInit(): void {
  }
  getPosts(){
    //this.getPostService.getPost();
    this.getPostService.getpostListener().subscribe({
      next: (res)=>{ 
        // this.posts = res
        this.grid_api.setRowData(this.posts)
      }
    })
  }

}
