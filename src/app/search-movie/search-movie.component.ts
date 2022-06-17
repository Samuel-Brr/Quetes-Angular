import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  searchMovieForm = this.fb.group({
    idAndTitle: this.fb.group({
      id: [''],
      title: ['']
    }),

    type: this.fb.group({
      film: ['film'],
      serie: ['série'],
      episode: ['épisode']
    }),

    annéeDeSortie: [''],

    fiche: this.fb.group({
      complete: ['complète'],
      courte: ['courte']
    })


  })


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
