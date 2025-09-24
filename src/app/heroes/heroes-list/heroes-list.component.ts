import { Component } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgForOf, NgIf],
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent {
  imageWidth: number = 100;
  imageMargin: number = 10;
  MuestraImagen: boolean = true;
  listFilter: string = '';

  heroes: IHeroes[] = [
    {
      imagen: "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Goku",
      description: "KameHameHa",
      race: "Saiyan",
      ki: 90000
    },
    {
      imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: "Vegeta",
      description: "Final Flash",
      race: "Saiyan",
      ki: 19000
    },
    {
      imagen: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Piccolo",
      description: "Malanasapo",
      race: "Namekiano",
      ki: 70000
    },
    {
      imagen: "https://dragonball-api.com/characters/Freezer.webp",
      nombre: "Freezer",
      description: "Death Ball",
      race: "Alien",
      ki: 70000
    }
  ];

  get filteredHeroes(): IHeroes[] {
    const filter = this.listFilter.toLowerCase();
    return this.heroes.filter(h =>
      h.nombre.toLowerCase().includes(filter)
    );
  }

  showImage(): void {
    this.MuestraImagen = !this.MuestraImagen;
  }
}
