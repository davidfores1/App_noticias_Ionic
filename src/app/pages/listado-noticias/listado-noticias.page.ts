import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia.model';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.page.html',
  styleUrls: ['./listado-noticias.page.scss'],
})
export class ListadoNoticiasPage implements OnInit {
   noticias:Noticia[];
  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {

    this.noticiasService.verNoticias().subscribe(response=>{
      this.noticias = response;     
    }, (error=>{
      console.log(error);
      
    }))
  }

}
