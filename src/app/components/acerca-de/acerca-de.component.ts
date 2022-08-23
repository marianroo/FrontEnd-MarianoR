import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';




@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","","","");

  public editPersona: persona ;
  
  constructor() { }

  isLogged = false;

  ngOnInit(): void {
    

  }





}
