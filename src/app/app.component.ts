import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from './service/message';
import {Subscription} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {MatDialog} from '@angular/material/dialog';
import {CookiemodalComponent} from './cookiemodal/cookiemodal.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public messageText = '';
    private messageServiceSubscription: Subscription;


    constructor(private messageService: MessageService, private cookieService: CookieService, public dialog: MatDialog) {

    }

    ngOnDestroy(): void {
        this.messageServiceSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.messageServiceSubscription = this.messageService.getMessage()
            .subscribe((message) => {
                this.messageText = message;
            });
        this.openCookieDialog();
    }

    private openCookieDialog() {
        const dialogRef = this.dialog.open(CookiemodalComponent, {
            width: '250px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
