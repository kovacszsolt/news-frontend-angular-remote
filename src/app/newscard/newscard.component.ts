import {Component, Injector, Input, OnInit} from '@angular/core';
import {ItemModel} from '../model/item.model';
import {MainComponent} from '../main.component';
import {Platform} from '@angular/cdk/platform';

@Component({
    selector: 'app-newscard',
    templateUrl: './newscard.component.html',
    styleUrls: ['./newscard.component.scss']
})
export class NewscardComponent extends MainComponent implements OnInit {
    @Input() data = new ItemModel();

    public image = '';

    constructor(injector: Injector, public platform: Platform) {
        super(injector);
    }

    public ngOnInit(): void {
        this.image = this.data.meta.imageUrlWebP;
        if (this.platform.SAFARI || this.platform.IOS) {
            this.image = this.data.meta.imageUrl;
        }
        this.remoteLocation();
    }

}
