import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Registros de usuarios';
  mensaje: string = "Holirris";
  registrado: boolean=false;
  nombre:string="";
  apellido: string= "";

  registrarUsuario(): void{
    this.registrado= true;
    this.mensaje="usuario registrado con extio";
  }
}
