import {Component, OnInit} from '@angular/core';
import {RemoteService} from "../service/remote";
import {ItemModel} from "../model/item.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-slug',
  templateUrl: './slug.component.html',
  styleUrls: ['./slug.component.scss']
})
export class SlugComponent implements OnInit {

  public data = new ItemModel();

  constructor(private activatedRoute: ActivatedRoute, private remoteService: RemoteService) {

  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get('slug'));
    this.remoteService.getSlug(this.activatedRoute.snapshot.paramMap.get('slug')).subscribe((response) => {
      this.data = response;
    });
  }

}
