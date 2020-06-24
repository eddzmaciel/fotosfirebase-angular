import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
//autentifacion con firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import 'firebase/auth';
import { FileItem } from '../models/file-item';



@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';
  constructor(private angularFireStore: AngularFirestore) { }



  cargarImagenesFirebase(imagenes: FileItem[]) {
    console.log(imagenes);
  }

  private guardarImagen(imagen: { nombre: string, url: string }) {
    //esto es para guardar la imagen que estamos pasando
    //le estamos pasando el objeto de imagen para guardar
    this.angularFireStore.collection(`${this.CARPETA_IMAGENES}`).add(imagen);
  }





}
