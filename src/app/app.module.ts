import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    ChangeStyleOnHoverDirective,
    ShowMoviesDirective,
    SignUpComponent,
    MenuComponent,
    CustomDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
