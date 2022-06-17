import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { ISearchMovieForm } from './searchMovieForm.model';
import { rangeDateValidator } from './validators/annee-de-sortie-between-1900-and-current-year.validator';
import { isRequiredValidator } from './validators/id-or-title-required.validator';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  allTypes: string[] = ['film', 'série', 'épisode']
  allFiches: string[] = ['courte', 'complète']
  currentYear: number = new Date().getFullYear()

  searchMovieForm: FormGroup<ISearchMovieForm> = this.fb.group({

    idAndTitle: this.fb.group({
      id: [''],
      title: ['']
    }, {validator: isRequiredValidator('id', 'title')}),

    type: ['série'],

    anneeDeSortie: ['',
      [
        rangeDateValidator(1970, this.currentYear),
        Validators.required,
      ]
    ],

    fiche: ['']

  })


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ficheInitialValue();

    console.log()

    this.searchMovieForm.valueChanges
    .pipe(
      tap(value => console.log('My Form updated: ', value))
    )
    .subscribe()
  }

  ficheInitialValue(){
    this.searchMovieForm.patchValue({
      fiche: 'courte'
    })

    this.searchMovieForm.controls['fiche'].disable()
  }

  onSubmit(){
    console.log(this.searchMovieForm.value)
  }

  get getIdAndTitle(){
    return this.searchMovieForm.controls['idAndTitle']
  }

  get anneeDeSortie(){
    return this.searchMovieForm.controls['anneeDeSortie']
  }

  get getIdentifiant(){
    return this.getIdAndTitle.controls['id']
  }

  enableFicheInput(){
    this.searchMovieForm.controls['fiche'].enable()
  }


}
