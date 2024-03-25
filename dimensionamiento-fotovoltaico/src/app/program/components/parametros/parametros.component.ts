import { Component } from '@angular/core';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent {
  potenciaDeseada: number = 0;
  eficienciaPaneles: number = 0;

  calcular() {
    // Aquí se realizaría el cálculo del dimensionamiento fotovoltaico
    // Puedes implementar la lógica de cálculo aquí mismo o llamar a un servicio
  }
}