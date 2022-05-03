import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNewsRoutingModule } from './add-news-routing.module';
import { AddNewsComponent } from './add-news/add-news.component';


@NgModule({
  declarations: [
    AddNewsComponent
  ],
  imports: [
    CommonModule,
    AddNewsRoutingModule
  ]
})
export class AddNewsModule { }
