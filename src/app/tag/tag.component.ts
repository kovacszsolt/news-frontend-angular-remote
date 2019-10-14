import {Component, OnInit} from '@angular/core';
import {RemoteService} from '../service/remote';
import {ItemPageModel} from '../model/item.model';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
    public itemPager = new ItemPageModel({});
    public page = 1;
    public itemList = [];

    constructor(private activatedRoute: ActivatedRoute, private remoteService: RemoteService) {

    }

    public ngOnInit(): void {
        this.getData();
    }

    private getData() {
        this.remoteService.getTag(this.activatedRoute.snapshot.paramMap.get('tag'), this.page).subscribe((response) => {
            this.itemPager = response;
            this.itemList = this.itemList.concat(response.content);
        });
    }

    nextPage() {
        this.page++;
        this.getData();
    }

}
