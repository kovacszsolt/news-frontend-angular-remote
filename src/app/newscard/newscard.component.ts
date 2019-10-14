import {Component, Input, OnInit} from '@angular/core';
import {ItemModel} from '../model/item.model';

@Component({
    selector: 'app-newscard',
    templateUrl: './newscard.component.html',
    styleUrls: ['./newscard.component.scss']
})
export class NewscardComponent implements OnInit {
    @Input() data = new ItemModel();

    constructor() {

    }

    public ngOnInit(): void {

    }

}
