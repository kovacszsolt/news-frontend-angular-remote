import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {MessageService} from "./service/message";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public messageText = '';
  private messageServiceSubscription: Subscription;

  constructor(private messageService: MessageService) {

  }

  ngOnDestroy(): void {
    this.messageServiceSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.messageServiceSubscription = this.messageService.getMessage()
      .subscribe((message) => {
        this.messageText = message
      });
  }

}
