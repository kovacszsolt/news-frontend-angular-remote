import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartComponent} from "./start/start.component";
import {SlugComponent} from "./slug/slug.component";
import {TagComponent} from "./tag/tag.component";
import {AboutComponent} from "./about/about.component";
import {CookieComponent} from "./cookie/cookie.component";


const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'tag/:tag',
    component: TagComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'cookie',
    component: CookieComponent
  },
  {
    path: ':slug',
    component: SlugComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
