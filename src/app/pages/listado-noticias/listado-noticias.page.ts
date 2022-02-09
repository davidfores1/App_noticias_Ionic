import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.page.html',
  styleUrls: ['./listado-noticias.page.scss'],
})
export class ListadoNoticiasPage implements OnInit {

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {

    this.noticiasService.verNoticias().subscribe(response=>{
      console.log(response);
      
    }, (error=>{
      console.log(error);
      
    }))
  }

}
