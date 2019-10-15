import {Component, Injector, OnInit} from '@angular/core';
import {MainComponent} from '../main.component';

@Component({
    selector: 'app-cookie',
    templateUrl: './cookie.component.html',
    styleUrls: ['./cookie.component.scss']
})
export class CookieComponent extends MainComponent implements OnInit {

    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        this.remoteLocation();
        this.messageService.updateMessage('Cookie');
    }

}
