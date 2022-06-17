import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangeStyleOnHoverDirective } from './change-style-on-hover.directive';
import { ShowMoviesDirective } from './show-movies.directive';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    ChangeStyleOnHoverDirective,
    ShowMoviesDirective,
    SignUpComponent,
    MenuComponent,
    CustomDirectivesComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
