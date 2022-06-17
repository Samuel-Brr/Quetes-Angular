import { FormGroup, FormControl } from "@angular/forms";

export interface ISearchMovieForm{

  idAndTitle: FormGroup<{
    id: FormControl<string | null>;
    title: FormControl<string | null>;
  }>;

  type: FormControl<string | null>;
  anneeDeSortie: FormControl<string | null>;
  fiche: FormControl<string | null>;

}
