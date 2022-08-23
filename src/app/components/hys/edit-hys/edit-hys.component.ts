import { Component, OnInit } from '@angular/core';
import { Hys } from 'src/app/model/hys';
import { SHysService } from 'src/app/service/s-hys.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-hys',
  templateUrl: './edit-hys.component.html',
  styleUrls: ['./edit-hys.component.css']
})
export class EditHysComponent implements OnInit {


  hys: Hys = null;

  constructor(private sHys: SHysService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHys.detail(id).subscribe(
      data =>{
        this.hys = data;
      }, err =>{
        alert("Error al modificar HyS");
        this.router.navigate(['']);
      }
    )
  }

  onUpdateHys(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHys.update(id, this.hys).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar proyecto");
         this.router.navigate(['']);
      }
    )
  }

 

}
