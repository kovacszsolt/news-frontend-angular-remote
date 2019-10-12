import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ItemModel, ItemPageModel} from "../model/item.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  public constructor(private http: HttpClient) {
  }

  public getList(page): Observable<ItemPageModel> {
    return this.http.get<ItemPageModel>(`${environment.BACKEND_SERVER}/list/${page}/8`).pipe(
      map((response) => {
        return new ItemPageModel(response)
      })
    );
  }

  public getSlug(slug): Observable<ItemModel> {
    return this.http.get<ItemPageModel>(`${environment.BACKEND_SERVER}/${slug}`).pipe(
      map((response) => {
        return new ItemModel(response)
      })
    );
  }

  public getTag(tag,page): Observable<ItemPageModel> {
    return this.http.get<ItemPageModel>(`${environment.BACKEND_SERVER}/tag/${tag}/${page}/8`).pipe(
      map((response) => {
        return new ItemPageModel(response)
      })
    );
  }
}
