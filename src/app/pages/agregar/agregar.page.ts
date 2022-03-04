import { Component, OnInit } from '@angular/core';
import { LoadingController,ToastController } from '@ionic/angular';
import { Noticia} from '../../models/noticia.model';
import { NoticiasService } from '../../services/noticias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  noticia: Noticia = new Noticia();
  esEditable: boolean = true;

  constructor(private NoticiasService:NoticiasService, public loadingController: LoadingController, public toastController: ToastController, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {

    if(this.activatedRoute.snapshot.params.noticiaEditar != undefined){
      
      this.noticia = new Noticia(JSON.parse(this.activatedRoute.snapshot.params.noticiaEditar))
      this.esEditable = false;
    }
  }

  async guardar(){

    const loading = await this.loadingController.create({
      message: 'Guardando noticia...',
      duration: 2000
    });
    await loading.present();

    this.NoticiasService.agregarNoticia(this.noticia).subscribe(()=>{
      
      console.log("guardado");
      console.log(this.noticia.title);
      console.log(this.noticia.body);

      this.noticia = new Noticia();
      loading.dismiss();
      this.mostrarMensaje("Noticia guardada");      
    },
    error=>{
      console.log(error);
      loading.dismiss();
      this.mostrarMensaje("Ocurrio un error");
      
    })
    
  }

  
  async editar(){

    const loading = await this.loadingController.create({
      message: 'Editando noticia...',
      duration: 2000
    });
    await loading.present();

    this.NoticiasService.editarNoticia(this.noticia).subscribe(()=>{

      console.log("Editado");
      console.log(this.noticia.title);
      console.log(this.noticia.body);

      this.noticia = new Noticia();
      this.mostrarMensaje("Noticia Editada");      
    },
    error=>{
      console.log(error);

      this.mostrarMensaje("Ocurrio un error");
      
    })
    
  }

  
  async mostrarMensaje(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
  
}
