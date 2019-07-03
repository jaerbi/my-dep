import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Film, FilmService} from "../../../shared/services/film.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  date: string;
  films: Film[] = [];
  loading: boolean = true;

  constructor(
      private route: ActivatedRoute,
      private filmService: FilmService
  ) { }

  ngOnInit() {
    this.date = this.route.snapshot.params['id'];

    this.filmService.load(this.date).subscribe(
        (a) => {
          this.films = a;
          this.loading = false;
        }, err => console.error(err)
    )
  }

  remove(film: Film) {
    this.filmService.remuve(film).subscribe(() => {
      this.films = this.films.filter(item => item.id !== film.id)
    }, err => console.error(err))
  }

}
