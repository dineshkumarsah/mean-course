import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']

})
export class PostCreateCompoent implements OnInit {
    mode: string = "create";
    postId: string
    post: Post

    constructor(
        private postService: PostService,
        private route: ActivatedRoute
        ) {

    }
    ngOnInit(): void {
        this.route.paramMap.subscribe(
            (pramMap: ParamMap)=>{
               if(pramMap.has('postId')){
                   this.mode = "edit";
                   this.postId = pramMap.get('postId');
                   this.postService.getPostById(this.postId).subscribe((res)=>{
                     this.post = {
                         id: res._id,
                         title: res.title,
                         content: res.content
                     }
                   })
               }else{
                   this.mode = "create";
                   this.postId = null
               }
            }
        );
     }
    onSavePost(postForm: NgForm) {
        if (postForm.form.invalid) {
            return
        }
        if(this.mode==="create"){
            this.postService.addPost(postForm.value.title, postForm.value.content)
        }else{
            this.postService.updatePost(this.postId,postForm.value.title, postForm.value.content)
        }
        postForm.resetForm(); 
    }
}