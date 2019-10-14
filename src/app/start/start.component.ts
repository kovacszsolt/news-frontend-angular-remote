import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {RemoteService} from "../service/remote";
import {ItemPageModel} from "../model/item.model";
import {MessageService} from "../service/message";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit, OnDestroy {
  public itemPager = new ItemPageModel({});
  public page = 1;
  public itemList = [];

  constructor(private remoteService: RemoteService, private messageService: MessageService) {

  }

  public ngOnInit(): void {
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
