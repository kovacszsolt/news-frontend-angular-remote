import {Observable, Subject} from 'rxjs';

export class MessageService {
    private myMessage = new Subject<string>();

    getMessage(): Observable<string> {
        return this.myMessage.asObservable();
    }

    updateMessage(message: string) {
        this.myMessage.next(message);
    }
}
