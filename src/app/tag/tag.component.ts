import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {ItemPageModel} from '../model/item.model';

import {MainComponent} from '../main.component';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss']
})
export class TagComponent extends MainComponent implements OnInit, OnDestroy {
    public itemPager = new ItemPageModel({});
    public page = 1;
    public itemList = [];
    private tag = '';
    public moreEnabled = false;

    constructor(injector: Injector) {
        super(injector);
    }

    public ngOnInit(): void {
        this.remoteLocation();
        this.activatedRoute.params.subscribe(params => {
            this.tag = params.tag;
            this.page = 1;
            this.itemList = [];
            this.getData();
        });
    }

    private getData() {
        this.remoteService.getTag(this.tag, this.page).subscribe((response) => {
            console.log('response', response);
            this.itemPager = response;
            this.itemList = this.itemList.concat(response.content);
            this.messageService.updateMessage(this.tag + ' - ' + response.total_elements);
            this.moreEnabled = !response.last;
        });
    }

    nextPage() {
        this.page++;
        this.getData();
    }

    ngOnDestroy(): void {
    }

}
