import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {ItemPageModel} from '../model/item.model';
import {MainComponent} from '../main.component';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent extends MainComponent implements OnInit, OnDestroy {
    public itemPager = new ItemPageModel({});
    public page = 1;
    public itemList = [];

    constructor(injector: Injector) {
        super(injector);
    }

    public ngOnInit(): void {
        this.remoteLocation();
        this.getData();
    }

    private getData() {
        this.remoteService.getList(this.page).subscribe((response) => {
            this.itemPager = response;
            this.itemList = this.itemList.concat(response.content);
            this.messageService.updateMessage(response.total_elements + 'news');
        });
    }

    nextPage() {
        this.page++;
        this.getData();
    }

    ngOnDestroy(): void {
    }
}
