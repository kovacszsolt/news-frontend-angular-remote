import {Observable, Subject} from 'rxjs';

export class MessageService {
    private myMessage = new Subject<string>();
    private myLocation = new Subject<string>();

    getMessage(): Observable<string> {
        return this.myMessage.asObservable();
    }

    getLocation(): Observable<string> {
        return this.myLocation.asObservable();
    }

    updateLocation(message: string) {
        this.myLocation.next(message);
    }

    updateMessage(message: string) {
        this.myMessage.next(message);
    }
}
