import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foo} from '../models/foo';

@Injectable({
  providedIn: 'root'
})
export class FooService {

  fooURL = 'http://localhost:8080/foo/';

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Foo[]> {
    return this.httpClient.get<Foo[]>(this.fooURL + 'list', this.httpOptions);
  }

  public detail(id: number): Observable<Foo> {
    return this.httpClient.get<Foo>(this.fooURL + `detail/${id}`, this.httpOptions);
  }

  public create(foo: Foo): Observable<any> {
    return this.httpClient.post<any>(this.fooURL + 'create', foo, this.httpOptions);
  }

  public update(id: number, foo: Foo): Observable<any> {
    return this.httpClient.put<any>(this.fooURL + `update/${id}`, foo, this.httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.fooURL + `delete/${id}`, this.httpOptions);
  }
}
