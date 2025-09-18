import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgForOf, NgIf],
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent {
  imageWidth:number=100;
  imageMargin:number=10;
  MuestraImagen:boolean=true;
  listFilter:string='';
listeFilter():void{
  console.log(this.listFilter);
  }
  showImage():void{
    this.MuestraImagen=!this.MuestraImagen;
  }

  heroes:any[]=[
    {
    imagen:"https://dragonball-api.com/characters/goku_normal.webp",
    nombre:"Goku",
    description:"KameHameHa",
    race:"Saiyan",
    ki:90000
    },
    {
    imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
    nombre:"Vegeta",
    description:"Final Flash",
    race:"Saiyan",
    ki:19000
    },
    {
    imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
    nombre:"Piccolo",
    description:"Malanasapo",
    race:"Namekiano",
    ki:70000
    },
     {
    imagen:"https://dragonball-api.com/characters/Freezer.webp",
    nombre:"Freezer",
    description:"Death Ball",
    race:"Alien",
    ki:70000
    }
  ]
}

