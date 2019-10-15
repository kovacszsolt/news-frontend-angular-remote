import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-cookiemodal',
    templateUrl: './cookiemodal.component.html',
    styleUrls: ['./cookiemodal.component.scss']
})
export class CookiemodalComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<CookiemodalComponent>) {
    }

    ngOnInit() {
    }

}
