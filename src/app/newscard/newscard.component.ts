import {Component, Injector, Input, OnInit} from '@angular/core';
import {ItemModel} from '../model/item.model';
import {MainComponent} from '../main.component';

@Component({
    selector: 'app-newscard',
    templateUrl: './newscard.component.html',
    styleUrls: ['./newscard.component.scss']
})
export class NewscardComponent extends MainComponent implements OnInit {
    @Input() data = new ItemModel();

    constructor(injector: Injector) {
        super(injector);
    }

    public ngOnInit(): void {
        this.remoteLocation();
    }

}
