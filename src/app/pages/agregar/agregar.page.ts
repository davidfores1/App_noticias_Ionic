import { Component, OnInit } from '@angular/core';
import { LoadingController,ToastController } from '@ionic/angular';
import { Noticia} from '../../models/noticia.model';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  noticia: Noticia = new Noticia;
  constructor(private NoticiasService:NoticiasService, public loadingController: LoadingController, public toastController: ToastController) { }

  ngOnInit() {
  }

  async guardar(){

    const loading = await this.loadingController.create({
      message: 'Guardando noticia...',
      duration: 2000
    });
    await loading.present();

    this.NoticiasService.agregarNoticia(this.noticia).subscribe(()=>{
      this.noticia = new Noticia();
      loading.dismiss();
      console.log("guardado");
      this.mostrarMensaje("Noticia guardada");      
    },
    error=>{
      console.log(error);
      loading.dismiss();
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
