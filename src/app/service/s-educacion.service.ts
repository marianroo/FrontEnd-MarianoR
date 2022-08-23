import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {

  educURL = 'https://be-mr-23-8-1.herokuapp.com/educacion/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.educURL + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.educURL + `detail/${id}`);
  } 

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.educURL + 'create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.educURL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.educURL + `delete/${id}`);
  }
}
