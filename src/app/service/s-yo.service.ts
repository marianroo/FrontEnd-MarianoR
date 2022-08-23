import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Yo } from '../model/yo';


@Injectable({
  providedIn: 'root'
})
export class SYoService {



  yoURL = 'https://portfolio-ms-2022.herokuapp.com/yo/';





  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Yo[]>{
    return this.httpClient.get<Yo[]>(this.yoURL + 'lista');
  }

  public detail(id: number): Observable<Yo>{
    return this.httpClient.get<Yo>(this.yoURL + `detail/${id}`);
  } 

  public save(yo: Yo): Observable<any>{
    return this.httpClient.post<any>(this.yoURL + 'create', yo);
  }

  public update(id: number, yo: Yo): Observable<any>{
    return this.httpClient.put<any>(this.yoURL + `update/${id}`, yo);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.yoURL + `delete/${id}`);
  }
}
