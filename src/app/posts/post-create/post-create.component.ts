import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {PostService} from '../post.service';


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']

})
export class PostCreateCompoent {

    constructor(private postService: PostService){

    }
    addPost(postForm: NgForm) {
        if(postForm.form.invalid){
          return
        }
        this.postService.addPost(postForm.value.title,postForm.value.content)
    }
}