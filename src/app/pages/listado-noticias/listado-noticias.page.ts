import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/models/noticia.model';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.page.html',
  styleUrls: ['./listado-noticias.page.scss'],
})
export class ListadoNoticiasPage implements OnInit {
   noticias:Noticia[];
  constructor(private noticiasService: NoticiasService, private route:Router) { }

  ngOnInit() {

    this.noticiasService.verNoticias().subscribe(response=>{
      this.noticias = response;     
    }, (error=>{
      console.log(error);
      
    }))
  }

  irADetalle(noticia: Noticia){
   this.route.navigate(['noticia-detalle',{noticia: JSON.stringify(noticia)}])
  }

  eliminarNoticia(noticiaID:number, indice: number){
    this.noticiasService.eliminarNoticia(noticiaID).subscribe(()=>{
    this.noticias.splice(indice,1);
      
    },
    error=>{
      console.log(error);
      
    }
    )
  }

  editar(noticia:Noticia){
    this.route.navigate(['/agregar',{noticiaEditar: JSON.stringify(noticia)}]);
  }

}
