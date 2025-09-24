import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  tickets: number = 100.00;
  totalPagar: number = 0;
  descuento: number = 0;
  totalConDescuento: number = 0;
  cantidadBoletos: number = 0;
  tieneTarjeta: boolean = false;
  nombreCliente: string = "";
  compradores: number = 0;
  errorCompra: string = "";

  calcularTotalBoletos(cantidad: number): number {
    return this.tickets * cantidad;
  }

  descuentoPorVolumen(cantidad: number, total: number): number {
    if (cantidad > 5) {
      return total * 0.15;
    } else if (cantidad >= 3) {
      return total * 0.10;
    } else {
      return 0;
    }
  }

  calcularDescuentoTarjeta(tarjeta: boolean, total: number): number {
    return tarjeta ? total * 0.10 : 0;
  }

  procesarCompra(): void {
      // No se puede comprar más de 7 boletos por persona
      if (this.cantidadBoletos > 7) {
        this.totalPagar = 0;
        this.totalConDescuento = 0;
        this.errorCompra = "Error: No se pueden comprar más de 7 boletos por persona.";
        return;
      }
      // Si son 7 boletos, debe haber más de 1 comprador
      if (this.cantidadBoletos >=8 && this.compradores <= 1) {
        this.totalPagar = 0;
        this.totalConDescuento = 0;
        this.errorCompra = "Error: Si compra 8 boletos debe haber más de 1 comprador.";
        return;
      }
      this.errorCompra = "";
      this.totalPagar = this.calcularTotalBoletos(this.cantidadBoletos);
      const descuentoVolumen = this.descuentoPorVolumen(this.cantidadBoletos, this.totalPagar);
      const descuentoTarjeta = this.calcularDescuentoTarjeta(this.tieneTarjeta, this.totalPagar - descuentoVolumen);
      this.descuento = descuentoVolumen + descuentoTarjeta;
      this.totalConDescuento = this.totalPagar - this.descuento;
  }

  cancelarCompra(): void {
    this.cantidadBoletos = 0;
    this.tieneTarjeta = false;
    this.totalPagar = 0;
    this.descuento = 0;
    this.totalConDescuento = 0;
    this.nombreCliente = "";
    this.compradores = 0;
    this.errorCompra = "";

  }
}
