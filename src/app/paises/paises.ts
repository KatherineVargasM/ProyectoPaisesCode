import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// CORRECCIÓN 1: Usar solo "../" porque Services está en la carpeta hermana
import { Pais } from '../Services/pais'; 

@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paises.html',
  styleUrl: './paises.css',
})
export class Paises {
  listadoPaises: any[] = [];

  constructor(private paisesService: Pais, private navegacion: Router) {
    this.obtenerTodos();
  }

  obtenerTodos() {
    this.paisesService.todos().subscribe({
      // CORRECCIÓN 2: Agregar ": any" para que TypeScript no se queje
      next: (data: any) => {
        this.listadoPaises = data;
        console.log(this.listadoPaises);
      },
      // CORRECCIÓN 3: Agregar ": any" aquí también
      error: (e: any) => {
        console.error("Error al cargar países:", e);
      }
    });
  }

  nuevopais() {
    this.navegacion.navigate(['/nuevopais']);
  }
}