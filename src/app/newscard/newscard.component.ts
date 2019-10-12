import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {RemoteService} from "../service/remote";
import {ItemModel, ItemPageModel} from "../model/item.model";

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.scss']
})
export class NewscardComponent implements OnInit {
  @Input() data=new ItemModel();

  constructor() {

  }

  public ngOnInit(): void {

  }

}
