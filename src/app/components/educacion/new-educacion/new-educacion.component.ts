import { Component, OnInit } from '@angular/core';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  nombreEduc: string = '';
  descripcionEduc: string = '';
  imgEduc: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreateEduc(): void {
    const educ = new Educacion(this.nombreEduc, this.descripcionEduc, this.imgEduc);
    this.sEducacion.save(educ).subscribe(
      data => {
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }



}
