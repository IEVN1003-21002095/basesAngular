import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operas-bas',
  imports: [CommonModule, FormsModule],
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
num1:string="";
num2:string="";
resultado:number=0;

sumar():void{
  this.resultado=parseInt(this.num1)+parseInt(this.num2);
}
restar():void{
  this.resultado=parseInt(this.num1)-parseInt(this.num2);
}
multiplicar():void{
  this.resultado=parseInt(this.num1)*parseInt(this.num2);
}
dividir():void{
  this.resultado=parseInt(this.num1)/parseInt(this.num2);
}
}

