import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operas-bas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1: string = "";
  num2: string = "";
  resultado: number = 0;
  operacionSeleccionada: string = "";

  ejecutarOperacion(): void {
    const n1 = parseFloat(this.num1);
    const n2 = parseFloat(this.num2);

    switch (this.operacionSeleccionada) {
      case "sumar":
        this.resultado = n1 + n2;
        break;
      case "restar":
        this.resultado = n1 - n2;
        break;
      case "multiplicar":
        this.resultado = n1 * n2;
        break;
      case "dividir":
        this.resultado = n2 !== 0 ? n1 / n2 : NaN;
        break;
      default:
        this.resultado = 0;
    }
  }
}
