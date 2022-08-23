import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  [x: string]: any;
  URL = 'https://portfolio-ms-2022.herokuapp.com/personas/';
  

  constructor(private http: HttpClient, ) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }




  public update(id: number, persona: persona): Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, persona);
  }




}
