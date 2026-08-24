import { Component } from '@angular/core';

@Component({
  selector: 'app-likes',
  imports: [],
  templateUrl: './likes.component.html',
  styleUrl: './likes.component.css'
})
export class LikesComponent {
  peliculas: string[] = [
    'assets/pelis/1.jpg',
    'assets/pelis/2.jpg',
    'assets/pelis/3.jpg',
    'assets/pelis/4.jpg',
    'assets/pelis/5.jpg',
    'assets/pelis/6.jpg',
    'assets/pelis/7.jpg',
    'assets/pelis/8.jpg',
  ]
}