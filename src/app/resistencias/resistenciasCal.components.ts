export class Color {
  constructor(
    public valor: number,
    public multiplicador: number,
    public nombre: string,
    public hex?: string
  ) {}
}

export class Tolerancia {
  constructor(
    public porcentaje: number,
    public nombre: string
  ) {}
  public hex?: string;
}

export class Resultado {
  constructor(
    public nominal: number,
    public minimo: number=0.0,
    public maximo: number
  ) {}
}
