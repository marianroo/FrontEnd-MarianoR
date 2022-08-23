import { Component, OnInit } from '@angular/core';
import { Yo } from 'src/app/model/yo';
import { SYoService } from 'src/app/service/s-yo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-yo',
  templateUrl: './edit-yo.component.html',
  styleUrls: ['./edit-yo.component.css']
})
export class EditYoComponent implements OnInit {

  yo: Yo = null;

  constructor(private sYo: SYoService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sYo.detail(id).subscribe(
      data =>{
        this.yo = data;
      }, err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )
  }

  onUpdateYo(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sYo.update(id, this.yo).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar Educacion");
         this.router.navigate(['']);
      }
    )
  }

}
