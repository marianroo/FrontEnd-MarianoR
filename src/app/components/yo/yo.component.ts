import { Component, OnInit } from '@angular/core';
import { Yo } from 'src/app/model/yo';
import { SYoService } from 'src/app/service/s-yo.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-yo',
  templateUrl: './yo.component.html',
  styleUrls: ['./yo.component.css']
})
export class YoComponent implements OnInit {

  yo: Yo[] = [];

  constructor(private sYo: SYoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarYo();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarYo(): void {
    this.sYo.lista().subscribe(data => { this.yo = data; })
  }
}
