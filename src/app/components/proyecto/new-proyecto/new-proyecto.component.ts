import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SProyectosService } from 'src/app/service/s-proyectos.service';


import { Proyectos } from 'src/app/model/proyectos';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {


  nombrePro: string = '';
  descripcionPro: string = '';
  imgPro: string = '';

  constructor(private sProyectos: SProyectosService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreatePro(): void {
    const educ = new Proyectos(this.nombrePro, this.descripcionPro, this.imgPro);
    this.sProyectos.save(educ).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }


}
