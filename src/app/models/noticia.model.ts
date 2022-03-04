export interface Noticia{
    userId:number;
    id:number;
    title:string;
    body:string;
}

export class Noticia{
    userId:number;
    id:number;
    title:string;
    body:string;

    constructor(datos?:Noticia){

        if(datos != null){
        this.userId = datos.userId
        this.id = datos.id
        this.title = datos.title;
        this.body = datos.body
    }
    }
}
