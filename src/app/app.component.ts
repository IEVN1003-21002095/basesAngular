import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeroesListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alan Sánchez';

  duplicarNumero(valor: number): number {
    return valor * 2;
  }

  peliculas = {
    titulo: 'El Padrino',
    fechaLanzamiento: new Date(1972, 2, 24),
    director: 'Francis Ford Coppola'
  };
}
