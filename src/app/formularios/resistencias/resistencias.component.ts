import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Color, Tolerancia, Resultado } from './resistenciasCal';

@Component({
  selector: 'app-resistencias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  colores: Color[] = [
    new Color(0, 1, 'Negro', '#000000'),
    new Color(1, 10, 'Cafe', '#964B00'),
    new Color(2, 100, 'Rojo', '#FF0000'),
    new Color(3, 1000, 'Naranja', '#FFA500'),
    new Color(4, 10000, 'Amarillo', '#FFFF00'),
    new Color(5, 100000, 'Verde', '#008000'),
    new Color(6, 1000000, 'Azul', '#0000FF'),
    new Color(7, 10000000, 'Morado', '#800080'),
    new Color(8, 100000000, 'Gris', '#808080'),
    new Color(9, 1000000000, 'Blanco', '#FFFFFF'),
  ];

  tolerancias: Tolerancia[] = [
    Object.assign(new Tolerancia(5, 'Dorado'), { hex: '#FFD700' }),
    Object.assign(new Tolerancia(10, 'Plateado'), { hex: '#C0C0C0' })
  ];
  // Asignar hex manualmente si no se pasa por constructor

  banda1: Color = this.colores[0];
  banda2: Color = this.colores[0];
  banda3: Color = this.colores[0];
  tolerancia: Tolerancia = this.tolerancias[0];

  resultado: Resultado = new Resultado(0, 0, 0);

  calcular(valor1?: number, valor2?: number, mult?: number, tol?: number): void {
    if (valor1 !== undefined) this.banda1 = this.colores[valor1];
    if (valor2 !== undefined) this.banda2 = this.colores[valor2];
    if (mult !== undefined) this.banda3 = this.colores[mult];
    if (tol !== undefined) this.tolerancia = this.tolerancias[tol];

    const valorNominal = (this.banda1.valor * 10 + this.banda2.valor) * this.banda3.multiplicador;
    const margen = valorNominal * (this.tolerancia.porcentaje / 100);

    this.resultado = new Resultado(
      valorNominal,
      valorNominal - margen,
      valorNominal + margen
    );
  }
}
