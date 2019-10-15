import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {StartComponent} from './start/start.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RemoteService} from './service/remote';
import {MatButtonModule} from '@angular/material/button';
import {NewscardComponent} from './newscard/newscard.component';
import {MatChipsModule} from '@angular/material/chips';
import {TagComponent} from './tag/tag.component';
import {SlugComponent} from './slug/slug.component';
import {MessageService} from './service/message';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {AboutComponent} from './about/about.component';
import {CookieComponent} from './cookie/cookie.component';
import {CookieService} from 'ngx-cookie-service';
import {CookiemodalComponent} from './cookiemodal/cookiemodal.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    declarations: [
        AppComponent,
        StartComponent,
        NewscardComponent,
        TagComponent,
        SlugComponent,
        AboutComponent,
        CookieComponent,
        CookiemodalComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatChipsModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule
    ],
    providers: [
        HttpClient,
        RemoteService,
        MessageService,
        CookieService
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        CookiemodalComponent
    ]
})
export class AppModule {
}
