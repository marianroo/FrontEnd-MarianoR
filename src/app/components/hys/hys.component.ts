import { Component, OnInit } from '@angular/core';
import { Hys} from 'src/app/model/hys';
import { SHysService} from 'src/app/service/s-hys.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {


  hys: Hys[] = [];
 

  constructor(private sHys: SHysService, private tokenService: TokenService) { }


  isLogged = false;

  ngOnInit(): void {

    this.cargarHys();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarHys(): void {
    this.sHys.lista().subscribe(data => { this.hys = data; })
  }

  deleteHys(id?: number){
    if(id != undefined){
      this.sHys.delete(id).subscribe(
        data => {
          this.cargarHys();
        }, err => {
          alert("No se pudo borrar el HyS");
        }
      )
    }
  }

}
