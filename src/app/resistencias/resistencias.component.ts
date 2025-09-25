import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resistencias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {

  // Lista de colores con valores y multiplicadores
  colores = [
    { nombre: 'Negro', valor: 0, multiplicador: 1 },
    { nombre: 'Cafe', valor: 1, multiplicador: 10 },
    { nombre: 'Rojo', valor: 2, multiplicador: 100 },
    { nombre: 'Naranja', valor: 3, multiplicador: 1000 },
    { nombre: 'Amarillo', valor: 4, multiplicador: 10000 },
    { nombre: 'Verde', valor: 5, multiplicador: 100000 },
    { nombre: 'Azul', valor: 6, multiplicador: 1000000 },
    { nombre: 'Morado', valor: 7, multiplicador: 10000000 },
    { nombre: 'Gris', valor: 8, multiplicador: 100000000 },
    { nombre: 'Blanco', valor: 9, multiplicador: 1000000000 },
  ];

  // Lista de tolerancias
  tolerancias = [
    { nombre: 'Dorado', porcentaje: 5 },
    { nombre: 'Plateado', porcentaje: 10 },
  ];

  // Variables para cada banda
  banda1 = this.colores[0];
  banda2 = this.colores[0];
  banda3 = this.colores[0];
  tolerancia = this.tolerancias[0];

  // Resultado final
  resultado = {
    nominal: 0,
    minimo: 0,
    maximo: 0,
  };

  // Método para calcular la resistencia
  calcular() {
  // Paso 1: obtener valores individuales
  let valor1 = this.banda1.valor;
  let valor2 = this.banda2.valor;
  let multiplicador = this.banda3.multiplicador;
  let porcentajeTolerancia = this.tolerancia.porcentaje;

  // Paso 2: calcular valor base
  let parteDecimal = valor1 * 10;
  let sumaDecimal = parteDecimal + valor2;
  let base = sumaDecimal;

  let valorFinal = base * multiplicador;

  // Paso 3: calcular margen
  let porcentajeDecimal = porcentajeTolerancia / 100;
  let margen = valorFinal * porcentajeDecimal;

  // Paso 4: asignar resultados
  let minimo = valorFinal - margen;
  let maximo = valorFinal + margen;

  this.resultado.nominal = valorFinal;
  this.resultado.minimo = parseFloat(minimo.toFixed(2));
  this.resultado.maximo = parseFloat(maximo.toFixed(2));
}
}
