import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './shared/components/nav/nav.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { BlogComponent } from './shared/components/blog/blog.component';
import { PodcastComponent } from './shared/components/podcast/podcast.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavComponent,
    BannerComponent,
    BlogComponent,
    PodcastComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
