import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SHysService } from 'src/app/service/s-hys.service';

import { Hys } from 'src/app/model/hys';


@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {


  nombreHys: string = '';
  descripcionHys: string = '';
  imgHys: string = '';
  porcentaje: number ;

  constructor(private sHys: SHysService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreateHys(): void {
    const hys = new Hys(this.nombreHys, this.descripcionHys, this.imgHys, this.porcentaje);
    this.sHys.save(hys).subscribe(
      data => {
        alert("Hys añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
