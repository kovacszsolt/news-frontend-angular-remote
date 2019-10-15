import {Component, Injector, OnInit} from '@angular/core';
import {ItemModel} from '../model/item.model';
import {MainComponent} from '../main.component';

@Component({
    selector: 'app-slug',
    templateUrl: './slug.component.html',
    styleUrls: ['./slug.component.scss']
})
export class SlugComponent extends MainComponent implements OnInit {

    public data = new ItemModel();
    private slug = '';

    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        this.remoteLocation();
        this.activatedRoute.params.subscribe(params => {
            this.slug = params.slug;
            this.remoteService.getSlug(this.slug).subscribe((response) => {
                this.data = response;
            });
        });

    }

}
