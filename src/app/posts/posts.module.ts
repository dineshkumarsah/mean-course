import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule} from '@angular/material/icon';
import { PostCreateCompoent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    PostCreateCompoent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatIconModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  

  ]
})
export class PostsModule { }
