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
      // Cada comprador puede comprar máximo 7 boletos
      const maxBoletos = this.compradores * 7;
      if (this.compradores < 1) {
        this.totalPagar = 0;
        this.totalConDescuento = 0;
        this.errorCompra = "Error: Debe haber al menos 1 comprador.";
        return;
      }
      if (this.cantidadBoletos > maxBoletos) {
        this.totalPagar = 0;
        this.totalConDescuento = 0;
        this.errorCompra = `Error: ${this.compradores} comprador(es) solo pueden comprar hasta ${maxBoletos} boletos.`;
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
