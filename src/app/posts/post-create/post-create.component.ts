import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';
import { FormControl, FormGroup, Validators } from '@angular/forms'


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']

})
export class PostCreateCompoent implements OnInit {
    mode: string = "create";
    postId: string
    post: Post;
    isLoading: boolean= false;
    form: FormGroup;
    imagePreview: any;

    constructor(
        private postService: PostService,
        private route: ActivatedRoute
        ) {

    }
    ngOnInit(): void {
        this.form = new FormGroup({
            'title': new FormControl( null, {validators: [Validators.required, Validators.minLength(3)]}),
            'content': new FormControl(null, {validators: [Validators.required]}),
            'image': new FormControl(null,{validators: [Validators.required]})
        });
        this.route.paramMap.subscribe(
            (pramMap: ParamMap)=>{
               if(pramMap.has('postId')){
                   this.mode = "edit";
                   this.postId = pramMap.get('postId');
                   this.isLoading =true
                   this.postService.getPostById(this.postId).subscribe((res)=>{
                    this.isLoading =false
                     this.post = {
                         id: res._id,
                         title: res.title,
                         content: res.content
                     }
                     this.form.setValue({
                         title: this.post.title,
                     content: this.post.content
                     })
                   })
               }else{
                   this.mode = "create";
                   this.postId = null
               }
            }
        );
     }

     onImagePicked(event: Event) {
      const files  = (event.target as HTMLInputElement).files[0]
      this.form.patchValue({
          image: files
      })
      this.form.get('image').updateValueAndValidity();
      console.log(files);
      console.log(this.form);
      const fileReader = new FileReader();
      fileReader.onload = ()=>{
          this.imagePreview = fileReader.result
      };
      fileReader.readAsDataURL(files)
      
     }

    onSavePost() {
        if (this.form.invalid) {
            return
        }
        if(this.mode==="create"){
            this.postService.addPost(this.form.value.title, this.form.value.content)
        }else{
            this.postService.updatePost(this.postId,this.form.value.title, this.form.value.content)
        }
        this.form.reset();
    }
}