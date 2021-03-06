import { Routes } from '@angular/router';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'custom', component: CustomDirectivesComponent },
  { path: 'search-movie', component: SearchMovieComponent },
];

export { ROUTES };
