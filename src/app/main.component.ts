import {MessageService} from './service/message';
import {Injector} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RemoteService} from './service/remote';

export class MainComponent {
    protected messageService: MessageService;
    protected activatedRoute: ActivatedRoute;
    protected remoteService: RemoteService;
    protected router: Router;

    constructor(injector: Injector) {
        this.activatedRoute = injector.get(ActivatedRoute);
        this.remoteService = injector.get(RemoteService);
        this.messageService = injector.get(MessageService);
        this.router = injector.get(Router);
    }

    remoteLocation(): void {
        this.messageService.getLocation().subscribe((link) => {
            this.router.navigate([link]);
        });
    }

}
