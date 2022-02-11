import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  verNoticias():Observable<Noticia[]>{
    return this.http.get<Noticia[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
