import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';

import { NewsProvider } from '../../providers/news/news';

@NgModule({
  declarations: [
    NewsPageModule,
    NewsPage
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
  ],
  exports: [
    NewsPageModule,
    NewsPage
  ],
  providers: [
    NewsProvider
  ]
})
export class NewsPageModule {}
