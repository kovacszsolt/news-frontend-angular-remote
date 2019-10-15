import {Component, Injector, OnInit} from '@angular/core';
import {MainComponent} from '../main.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent extends MainComponent implements OnInit {

    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        this.remoteLocation();
        this.messageService.updateMessage('About');
    }

}
